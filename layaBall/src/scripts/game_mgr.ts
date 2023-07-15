import ball_ctrl from "./ball_ctrl";

// Laya.Script 脚本组件的基类;
export default class game_mgr extends Laya.Script {

    // 权限 名字: 类型 = 默认值; , 默认是public
    private is_debug: boolean = false;

    private particle: Laya.ShurikenParticleSystem = null;
    // 权限 函数名字(参数名字: 参数类型, 参数名字: 参数类型): 返回值类型(void)
    private test_foo(lhs: number, rhs: number): void {

    }
    // end 

    private on_win_socre(): void {
        this.particle.stop();
        this.particle.play();
    }

    // 组件实例加载调用
    onAwake(): void {
        Laya.stage.on("WIN_SOCRE", this, this.on_win_socre);
        Laya.Scene3D.load("res/scenes3D/LayaScene_game/Conventional/game.ls", Laya.Handler.create(this, this.on_scene3d_loaded));
    }

    private on_scene3d_loaded(scene3D: Laya.Scene3D): void {
        Laya.stage.addChild(scene3D);
        var ball: Laya.Sprite3D = scene3D.getChildByName("ball") as Laya.Sprite3D;
        ball.addComponent(ball_ctrl);

        this.particle = (scene3D.getChildByName("Particle") as Laya.ShuriKenParticle3D).particleSystem;
        this.particle.stop();
    }

    // 游戏画面每次刷新
    onUpdate(): void {
        // console.log("onUpdate");
    }
}

