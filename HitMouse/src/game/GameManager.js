import ScoreFloat from "./ScoreFloat";

var keyScoreHighest = "keyScoreHighest";

export default class GameManager extends Laya.Script {

    constructor() { 
        super(); 
        /** @prop {name:lblCountDownValue, tips:"倒计时", type:Node, default:null}*/
                 this. lblCountDownValue = null;
        /** @prop {name:lblScoreValue, tips:"得分", type:Node, default:null}*/
                 this. lblScoreValue = null;
        /** @prop {name:dialogGameOver, tips:"游戏结束", type:Node, default:null}*/
                 this. dialogGameOver = null;
        /** @prop {name:lblScoreCurValue, tips:"当前成绩", type:Node, default:null}*/
                 this. lblScoreCurValue = null;
        /** @prop {name:lblScoreHighValue, tips:"最高得分", type:Node, default:null}*/
                 this. lblScoreHighValue = null;
         /** @prop {name:prefabMouse, tips:"老鼠", type:Prefab, default:null}*/
                 this. prefabMouse = null;
        /** @prop {name:containerMouse, tips:"老鼠容器", type:Node, default:null}*/
                 this. containerMouse = null;
        /** @prop {name:hammer, tips:"锤子", type:Node, default:null}*/
                 this. hammer = null;
        /** @prop {name:prefabScoreFloat, tips:"浮动分数", type:Prefab, default:null}*/
                 this. prefabScoreFloat = null;
         /** @prop {name:containerScoreFloat, tips:"浮动分数容器", type:Node, default:null}*/
                this. containerScoreFloat = null;
    }

    onAwake(){
        this.isPlaying = false;
        this.btnPlayAgain = null;
        this.arrPosMouse = [];
        this.isPlus = false;
    }
    

    onStart(){
        this.btnPlayAgain = this.dialogGameOver.Laya.getChildByName("btnPlayAgain");
       
        this.btnPlayAgain.on(Laya.Event.MOUSE_DOWN,this,function(){
            this.dialogGameOver.visiable = false;  //隐藏dialog 
            
          this.gameStart()
        });
       this.gameStart();//游戏开始
     }
     
     onOnceSecond(){
        this.nCountdown--;
        this.lblCountDownValue.text = ""+this.nCountdown;
        
        if(this.nCountdown <= 0){  //倒计时为负数，游戏结束
           this.gameOver();
        }
     }

     onMouseHited(indexPosMouse,typeMouse){
        if(!this.isPlaying){
            return;  //没有进行游戏
        }
        var posMouse = GameConfig.arrPosMouse[indexPosMouse];
        this.hammer.pos(posMouse.x+60,posMouse.y-60);

        var compHammer =  this.hammer.getComponent(Hammer)
        compHammer.show();

        //处理分数
        var scoreFloat = this.prefabScoreFloat.create();
        this.containerScoreFloat.addChild(scoreFloat);
        scoreFloat.pos(posMouse.x-60,posMouse.y-60);//分数的icon 位置偏下了。所以减
        
        this.isPlus = typeMouse  === 2 ? true : false;
        var comScoreFloat = scoreFloat.getComponent(ScoreFloat);
        comScoreFloat.show( this.isPlus);

        if(this.isPlus){
            this.nScore += 100;
        }else {
            this.nScore -= 100;
            if(this.nScore < 0){
                this.nScore = 0;
            }
        }
        this.lblScoreValue.text = ""+this.nScore; //更新得分
    }

     gameStart(){
        this.isPlaying = true;
        
        this.dialogGameOver.visiable = false;
        
        this.nCountdown = 30; //  倒计时间
        this.nScore = 0;   
        //得分
        
        this.arrPosMouse.length = 0;
        
        for(var i=0;i<9;i++){
           this.arrPosMouse.push(null);
        }
        
        this.lblCountDownValue.text = ""+this.nCountdown; //更新倒计时
        this.lblScoreValue.text = ""+this.nScore; //更新得分
        
        //定时器，倒计时计数
        Laya.timer.loop(1000,this,this.onOnceSecond);
        Laya.timer.once(1000,this,this.generateMouse,
                        [this.getRandomInt(1,this.arrPosMouse.length)]);
                         //游戏开始延迟1秒生成老鼠
     }
     
     gameOver(){
        this.isPlaying = false;
        this.dialogGameOver.visiable = true;
        
        Laya.timer.clear(this,this.onOnceSecond()); //关闭定时器

        this.lblScoreCurValue.text = ""+this.nScore; //更新得分
        
        var nScoreHighest = 0;
        if( window.localStorage[keyScoreHighest]){
            //如果存在。且大于当前成绩
           if( window.localStorage[keyScoreHighest] > this.nScore){
               nScoreHighest = window.localStorage[keyScoreHighest];
           }else{
               nScoreHighest =this.nScore;
           }
        }else{
            //第1次玩或清空数据了
            nScoreHighest = this.nScore;
        }
        window.localStorage[keyScoreHighest] = nScoreHighest;
        this.lblScoreCurValue.text = ""+nScoreHighest; //更新得分
     }
     
     generateMousen(numMouse){
        if(!this.isPlaying){
           return;    //解决游戏结束后还在生成老鼠
        }
     
        for(var i=0;i<numMouse;i++){
       
           var indexPosMouse =this.getRandomInt(0,this.arrPosMouse.length -1); 
           if(this.arrPosMouse[indexPosMouse]){
              continue;
           }   
           
           var mouse = this.prefabMouse.create();
           this.containerMouse.addChild(numMouse);
           
           var posMouse = GameConfig.arrPosMouse[indexPosMouse];//取到当前老鼠坐标
           mouse.pos(posMouse.x,posMouse.y);
           
           this.arrPosMouse[indexPosMouse] = mouse;//解决1个洞中出来2只老鼠
           
           var typeMouse = this.getRandomInt(1,2);
           var comMouse = mouse.getComponet(Mouse);
           comMouse.show(this,typeMouse,indexPosMouse);//主要是做个动画
        }
        
        Laya.timer.once(3000,this,this.generateMouse,
                       [this.getRandomInt(1,this.arrPosMouse.length)]);
     }
     
     //生成制定区间位置的整数，例如[1,5]
     getRandomInt(lsection,rsection){
       if(lsection > rsection){
         consloe.log("whrong")
         return -1;
       }
        return Math.floor(Math.random()*(rsection - lsection + 1)) + lsection;
     }
}