(function () {
    'use strict';

    var State = {
        Idle: 1,
        AddForce: 2,
        ThrowOut: 3,
        CheckOut: 4,
    };
    class ball_ctrl extends Laya.Script3D {
        constructor() {
            super(...arguments);
            this.state = State.Idle;
            this.body = null;
            this.MIN_SPEED = 0;
            this.MAX_SPEED = 0;
            this.add_force = 0;
            this.groud_speed = 0;
        }
        reset() {
            this.state = State.Idle;
            this.body.overrideGravity = true;
            this.body.gravity = new Laya.Vector3(0, 0, 0);
        }
        onAwake() {
            this.MIN_SPEED = 4.5;
            this.MAX_SPEED = 7;
            this.groud_speed = (this.MAX_SPEED - this.MIN_SPEED) / 3;
            this.body = this.owner.getComponent(Laya.Rigidbody3D);
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.on_touch_start);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.on_touch_end);
            this.reset();
        }
        on_touch_start() {
            if (this.state !== State.Idle) {
                return;
            }
            this.state = State.AddForce;
            this.add_force = 0;
        }
        throw_ball() {
            this.body.overrideGravity = true;
            this.body.gravity = new Laya.Vector3(0, -10, 0);
            var speed = 4.5 + this.add_force;
            var degree = 60;
            var r = degree * Math.PI / 180;
            var vy = speed * Math.sin(r);
            var vz = speed * Math.cos(r);
            this.body.linearVelocity = new Laya.Vector3(0, vy, vz);
        }
        on_touch_end() {
            if (this.state !== State.AddForce) {
                return;
            }
            this.state = State.ThrowOut;
            this.throw_ball();
        }
        onUpdate() {
            if (this.state === State.AddForce) {
                var dt = Laya.timer.delta / 1000;
                this.add_force += (this.groud_speed * dt);
                this.add_force = (this.add_force > (this.MAX_SPEED - this.MIN_SPEED)) ? (this.MAX_SPEED - this.MIN_SPEED) : this.add_force;
            }
        }
        onTriggerEnter(other) {
            Laya.stage.event("WIN_SOCRE", null);
        }
    }

    class game_mgr extends Laya.Script {
        constructor() {
            super(...arguments);
            this.is_debug = false;
            this.particle = null;
        }
        test_foo(lhs, rhs) {
        }
        on_win_socre() {
            this.particle.stop();
            this.particle.play();
        }
        onAwake() {
            Laya.stage.on("WIN_SOCRE", this, this.on_win_socre);
            Laya.Scene3D.load("res/scenes3D/LayaScene_game/Conventional/game.ls", Laya.Handler.create(this, this.on_scene3d_loaded));
        }
        on_scene3d_loaded(scene3D) {
            Laya.stage.addChild(scene3D);
            var ball = scene3D.getChildByName("ball");
            ball.addComponent(ball_ctrl);
            this.particle = scene3D.getChildByName("Particle").particleSystem;
            this.particle.stop();
        }
        onUpdate() {
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("scripts/game_mgr.ts", game_mgr);
        }
    }
    GameConfig.width = 960;
    GameConfig.height = 640;
    GameConfig.scaleMode = "fixedheight";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "game.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError = true;
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
