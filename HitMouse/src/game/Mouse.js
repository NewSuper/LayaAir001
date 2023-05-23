import GameConfig from "../GameConfig";
import GameManager from "./GameManager";

export default class Mouse extends Laya.Script {

    onAwake(){
        this.timeLine = null;
        this.gameManager = null;
        this.typeMouse = 0;
        this.indexPosMouse =-1;
        this.isHited = false;
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
     onClick(e){
        if(this.isHited)return; //只允许砸1次
           this.isHited = true;

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

        this.gameManager.onMouseHited(indexPosMouse,this.typeMouse);
     }
}