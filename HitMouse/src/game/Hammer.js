export default class Hammer extends Laya.Script {

    constructor() { 
        super(); 
    }
    
    onAwake(){
       this.timeLine = null;
    }

    show(){
        this.owner.alpha = 1; //先把锤子显示出来
        this.owner.rotation = 0;//解决第2次挥动锤子有卡顿现象
      
        if(this.timeLine){
            this.timeLine.destory();
            this.timeLine = null;  //快速点击时先销毁之前的
           //因为下面有个动画未执行完且存在的话，先销毁之前的动画
         }
        this.timeLine = Laya.TimeLine.to(this.owner,{rotation:10,},90)
                .to(this.owner,{rotation:-10,},90 * 2) 
                //延迟300豪秒透明度为0
                .to(this.owner,{alpha:0},100,null,150); 
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