    import game_config from "./game_config";
    import mouse from "./mouse";
    import hammer from "./hammer";
    
    export default class game_m extends Laya.Script {
    /** @prop {name:mouse_prefab, tips:"老鼠预制体", type:Prefab, default:null}*/
    /** @prop {name:mouse_root, tips:"老鼠父亲节点", type:Node, default:null}*/
    /** @prop {name:hammer, tips:"锤子节点", type:Node, default:null}*/
     /** @prop {name:gamescore, tips:"游戏分数", type:Node, default:null}*/

    private static create():void{};
    private score: number;
    constructor() { 
        super();
        this.mouse_prefab = null;
        this.mouse_root = null;
        this.hammer = null;
        this.gamescore = null;
        this.score = 0;
    }
    
    //克隆老鼠出现在随机洞中
    clone_mouse(): void{
        //1 克隆后添加到老鼠父亲节点mouse_root
        var m = this.mouse_prefab.create();
        this.mouse_root.addChild(m)

        //2 老鼠洞索引[0,8]
        var hole_index: number = Math.random() * 9;       
        hole_index = Math.floor(hole_index); //向下取整 Math.floor()方法
        // console.log(hole_index) //调试打印出来哪个洞的索引
        m.x = game_config.mouse_pos[hole_index].x;
        m.y = game_config.mouse_pos[hole_index].y;

        var mouse_type:number = (Math.random()<0.5) ? 1:2;
        // 添加mouse组件后调用show_mouse(mgr,type)方法
        m.getComponent(mouse).show_mouse(this,mouse_type,hole_index);

        //3 定时出现老鼠
        var time:number =(2 + Math.random() * 2) * 1000;
        time = Math.floor(time);//向下取整
        //调用laya时间函数Laya.timer.once()  查看文档 便知天下事
        Laya.timer.once(time,this,this.clone_mouse);
    }
    // 打老鼠加分
    play_mouse_addScore(mouse_type,hole_index): void{
        //1 根据老鼠类型加分或者减分
        this.score += (mouse_type == 2? 100:-100)
        if(this.score < 0){
            this.score = 0;
            alert("游戏结束")
        }
        this.gamescore.text = this.score;
        // console.log(this.gamescore.text)
        //2 根据老鼠洞的位置调整锤子的移动位置
        this.hammer.x = game_config.hammer_pos[hole_index].x;
        this.hammer.y = game_config.hammer_pos[hole_index].y;
        //3 播放锤子的动画
        this.hammer_com.play_hammer();        
    }

    onStart(): void{
        this.hammer_com = this.hammer.getComponent(hammer); 
        this.clone_mouse();
        // console.log(game_config)
    }

}