export default class hammer extends Laya.Script {
    
    constructor() { super(); 
        
    }
      
    // 锤子敲打方法
    play_hammer(): void{
        var time: number = 100;
        this.owner.alpha = 1;
        var time_line = Laya.TimeLine.to(this.owner,{rotation: 10},time);
        time_line.to(this.owner,{rotation: -10},time*2)
        time_line.to(this.owner,{rotation: 0},time)
        time_line.to(this.owner,{alpha: 0},time*2,null,time*10)
        time_line.play(0,false)
    }
    onStart(): void{
        // this.play_hammer()
        console.log("锤子修改");
    }
}