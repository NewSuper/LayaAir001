export default class mouse extends Laya.Script {
    /** @prop {name:mouse_type, tips:"老鼠类型", type:Int, default:1}*/
   
    constructor() {
         super(); 
         this.mouse_type = 1; //构造函数一定要给默认值 否则有可能会报错(因为编译先构造函数  然后再跑@prop界面绑定的值)
         this.time_line = null; //默认时间动画为空
         this.is_dead = false; //默认老鼠还没死
    }
    /**
     * 显示老鼠方法
     * @param mgr 老鼠管理类
     * @param type 老鼠类型
     * @param hole_index 老鼠洞索引
     */
    show_mouse(mgr,type,hole_index): void{
        // 切换皮肤 节点属性skin
        this.mgr = mgr;
        this.mouse_type = type;
        this.hole_index = hole_index;
        this.owner.skin = "ui/mouse_normal_"+this.mouse_type+".png";
        //缓动--时间线
        var time_line = Laya.TimeLine.to(this.owner,{scaleX: 1,scaleY: 1},300);
        time_line.to(this.owner,{scaleX: 0,scaleY: 0},300,null,1000)
        time_line.play(0,false);//播放动画线
        // 老鼠出现后立即删除 不然造成cpu累计加载
        time_line.on(Laya.Event.COMPLETE,this,function(){
            this.owner.removeSelf();
        });

        this.time_line = time_line;
    }

    onStart(): void{
        // 测试 调用显示老鼠函数
        // this.show_mouse(this.mouse_type)
        console.log("游戏开始了*********");
    }
    // 敲打老鼠方法
    play_mouse(): void{
        if(this.time_line != null){
            this.time_line.destroy();
            this.time_line = null;
        }
        // 打下去死亡后切换死亡图片
        this.owner.skin = "ui/mouse_hit_"+this.mouse_type+".png";
        var time_line = Laya.TimeLine.to(this.owner,{scaleX: 0,scaleY: 0},300,null,500);
        time_line.play(0,false);//播放动画线
        // 监听播放后消失
        time_line.on(Laya.Event.COMPLETE,this,function(){
            this.owner.removeSelf();
        });
    }

    onClick(): void{
        if(this.is_dead){
            return;
        }      
        this.is_dead = true;  
        this.play_mouse();              

        // 打老鼠 给游戏得分
        this.mgr.play_mouse_addScore(this.mouse_type,this.hole_index)
           
    }

}