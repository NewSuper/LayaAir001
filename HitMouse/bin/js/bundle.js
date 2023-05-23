(function () {
    'use strict';

    class Hammer$1 extends Laya.Script {

        constructor() { 
            super(); 
          
        }
        
        onAwake(){
           this.timeLine = null;
        }

        show(){
            this.owner.alpha = 1; //先把锤子显示出来

            this.timeLine = Laya.TimeLine.to(this.owner,{rotation:10,},90)
                    .to(this.owner,{rotation:-10,},90 * 2,null,300) 
                    //延迟300豪秒透明度为0
                    .to(this.owner,{alpha:0},90 * 2); 
            this.timeLine.play(0,false);
            
            // this.timeLine.on(Laya.Event.COMPLETE,this,function(){
            //     this.owner.alpha = 0;
            // });
        }

        onEnable() {
        }

        onDisable() {
        }
    }

    class GameManager extends Laya.Script {

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
        }

        onAwake(){
            this.isPlaying = false;
            this.btnPlayAgain = null;
            this.arrPosMouse = [];
        }
        

        onStart(){
            this.btnPlayAgain = this.dialogGameOver.Laya.getChildByName("btnPlayAgain");
           
            this.btnPlayAgain.on(Laya.Event.MOUSE_DOWN,this,function(){
                this.dialogGameOver.visiable = false;  //隐藏dialog 
                
              this.gameStart();
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

         onMouseHited(indexPosMouse){
            var posMouse = GameConfig.arrPosMouse[indexPosMouse];
            this.hammer.pos(posMouse.x+60,posMouse.y-60);

            var compHammer =  this.hammer.getComponent(Hammer);
            compHammer.show(indexPosMouse);
        }

         gameStart(){
            this.isPlaying = true;
            
            this.dialogGameOver.visiable = false;
            
            this.nCountdown = 15; //  倒计时间
            this.nScore = 0;   //得分
            
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
            
            //关闭定时器
            Laya.timer.clear(this,this.onOnceSecond());
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
             consloe.log("whrong");
             return -1;
           }
            return Math.floor(Math.random()*(rsection - lsection + 1)) + lsection;
         }
    }

    class Mouse$1 extends Laya.Script {

        onAwake(){
            this.timeLine = null;
            this.gameManager = null;
            this.typeMouse = 0;
            this.indexPosMouse =-1;
         }
      
         show(gameManager,typeMouse,indexPosMouse){
            this.gameManager = gameManager;
            this.typeMouse = typeMouse;
            this.indexPosMouse = indexPosMouse;

            this.owner.skin = "res/mouse_normal_"+typeMouse+".png"; //皮肤
         
            this.owner.scaleX = 0;
            this.owner.scaleY = 0;
          
            //当老鼠变大后停留1s,再通过300毫秒缩放成0
            this.timeLine = Laya.TimeLine.to(this.owner,{scaleX:1,scaleY:1},300)
                   .to(this.owner,{scaleX:0,scaleY:0},300,null,2000); //时间轴
            this.timeLine.play(0,false);
            
            this.timeLine.on(Laya.Event.COMPLETE,this,function(){
               this.owner.removeSelf();
               this.gameManager.arrPosMouse[this.indexPosMouse] = null;
            });
         }
          
         //用锤子敲老鼠
         onClick(){
            this.owner.skin = "res/mouse_hited_"+this.typeMouse+".png";
            
            if(this.timeLine){
               this.timeLine.destory();
               this.timeLine = null;  
              //因为下面有个动画未执行完且存在的话，先销毁之前的动画
            }
            this.timeLine = Laya.TimeLine.to(this.owner,{scaleX:0,scaleY:0},300); 
            this.timeLine.play(0,false);
            
            this.timeLine.on(Laya.Event.COMPLETE,this,function(){
               this.owner.removeSelf();
               this.gameManager.arrPosMouse[this.indexPosMouse] = null;
            });

            this.gameManager.onMouseHited(indexPosMouse);
         }
    }

    /**This class is automatically generated by LayaAirIDE, please do not make any modifications. */

    class GameConfig$1 {
        static init() {
            //注册Script或者Runtime引用
            let reg = Laya.ClassUtils.regClass;
    		reg("game/Hammer.js",Hammer$1);
    		reg("game/GameManager.js",GameManager);
    		reg("game/Mouse.js",Mouse$1);
        }
    }
    GameConfig$1.width = 960;
    GameConfig$1.height = 640;
    GameConfig$1.scaleMode ="fixedwidth";
    GameConfig$1.screenMode = "horizontal";
    GameConfig$1.alignV = "middle";
    GameConfig$1.alignH = "center";
    GameConfig$1.startScene = "GameScene.scene";
    GameConfig$1.sceneRoot = "";
    GameConfig$1.debug = false;
    GameConfig$1.stat = false;
    GameConfig$1.physicsDebug = false;
    GameConfig$1.exportSceneToJson = true;

    GameConfig$1.init();

    class Main {
    	constructor() {
    		//根据IDE设置初始化引擎		
    		if (window["Laya3D"]) Laya3D.init(GameConfig$1.width, GameConfig$1.height);
    		else Laya.init(GameConfig$1.width, GameConfig$1.height, Laya["WebGL"]);
    		Laya["Physics"] && Laya["Physics"].enable();
    		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
    		Laya.stage.scaleMode = GameConfig$1.scaleMode;
    		Laya.stage.screenMode = GameConfig$1.screenMode;
    		Laya.stage.alignV = GameConfig$1.alignV;
    		Laya.stage.alignH = GameConfig$1.alignH;
    		//兼容微信不支持加载scene后缀场景
    		Laya.URL.exportSceneToJson = GameConfig$1.exportSceneToJson;

    		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
    		if (GameConfig$1.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
    		if (GameConfig$1.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
    		if (GameConfig$1.stat) Laya.Stat.show();
    		Laya.alertGlobalError(true);

    		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
    		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    	}

    	onVersionLoaded() {
    		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
    		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    	}

    	onConfigLoaded() {
    		//加载IDE指定的场景
    		GameConfig$1.startScene && Laya.Scene.open(GameConfig$1.startScene);
    	}
    }
    //激活启动类
    new Main();

}());
