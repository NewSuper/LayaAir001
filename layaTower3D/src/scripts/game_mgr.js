import nav_agent from "./nav_agnet";

export default class game_mgr extends Laya.Script {
    onAwake() {
        // console.log("onAwake");
        // 框架初始化
        // end 

        this.enter_game_scene();
    }

    enter_game_scene() {
        // 装载我们的3D场景
        Laya.Scene3D.load("res/scenes3D/LayaScene_tower/Conventional/tower.ls", Laya.Handler.create(this, this.on_scene3D_loaded))
        // end 

        // 释放我们的UI界面
        // end 
    }

    on_scene3D_loaded(scene3D)  {
        Laya.stage.addChild(scene3D);
        var mon = scene3D.getChildByName("monester");
        mon.addComponent(nav_agent);
    }

    onUpdate() {
        // console.log("onUpdate");
    }
}

