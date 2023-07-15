(function () {
    'use strict';

    class MonoBehaviour extends Laya.Script3D {
        constructor() {
            super(...arguments);
            this.gameObject = null;
            this.transfrom = null;
        }
        onAwake() {
            this.gameObject = this.owner;
            this.transfrom = this.gameObject.transform;
            this.Awake();
        }
        onStart() {
            this.Start();
        }
        onUpdate() {
            this.Update();
        }
        onLateUpdate() {
            this.LateUpdate();
        }
        Awake() {
        }
        Start() {
        }
        Update() {
        }
        LateUpdate() {
        }
    }

    var State = {
        Idle: 0,
        Drawing: 1,
        LookAt: 2,
        Shoot: 3,
    };
    class GameMgr extends MonoBehaviour {
        constructor() {
            super(...arguments);
            this.rightHand = null;
            this.archerAnim = null;
            this.arrow = null;
            this.camera = null;
            this.state = 0;
            this.uiCursor = null;
            this.physicsSimulation = null;
        }
        Awake() {
        }
        init(uiCursor) {
            this.uiCursor = uiCursor;
            this.configGame();
        }
        configGame() {
            var person = this.gameObject.getChildByName("Person");
            this.camera = person.getChildByName("Main Camera");
            this.rightHand = person.getChildByName("RightHand");
            this.archerAnim = this.rightHand.getChildByName("pkGgreenTB").getComponent(Laya.Animator);
            this.arrow = this.rightHand.getChildByName("pkJMrubyC");
            this.physicsSimulation = this.owner.physicsSimulation;
            this.reset();
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onTouchStart);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onTouchEnd);
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onTouchMove);
        }
        reset() {
            this.uiCursor.visible = false;
            this.state = State.Idle;
            this.archerAnim.play("Idle");
        }
        onTouchStart() {
            if (this.state !== State.Idle) {
                return;
            }
            this.state = State.Drawing;
            this.archerAnim.play("Draw");
            Laya.Tween.to(this.arrow.transform, { localPositionZ: 0.132 }, 667);
            this.gameObject.timerOnce(1000, this, function () {
                this.state = State.LookAt;
                this.uiCursor.visible = true;
                this.lookTarget();
            });
        }
        lookTarget() {
            var point = new Laya.Vector2(Laya.stage.mouseX, Laya.stage.mouseY);
            var ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 1));
            this.camera.viewportPointToRay(point, ray);
            var resultHit = new Laya.HitResult();
            if (this.physicsSimulation.rayCast(ray, resultHit)) {
                var pt = resultHit.point;
                this.rightHand.transform.lookAt(pt, new Laya.Vector3(0, 1, 0), false);
                var screenPoint = new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY);
                var pos = this.uiCursor.parent.fromStagePoint(screenPoint);
                this.uiCursor.pos(pos.x, pos.y);
            }
        }
        onTouchMove() {
            if (this.state !== State.LookAt) {
                return;
            }
            this.lookTarget();
        }
        onTouchEnd() {
            if (this.state !== State.LookAt) {
                return;
            }
            this.state = State.Shoot;
            this.uiCursor.visible = false;
            this.shootArrow();
        }
        shootArrow() {
            this.archerAnim.play("Idle");
        }
        Start() {
        }
        Update() {
        }
    }

    class GameLanch extends Laya.Script {
        onAwake() {
        }
        onStart() {
            Laya.Scene3D.load("res/3D/LayaScene_Game/Conventional/Game.ls", Laya.Handler.create(this, this.onScene3DLoad));
        }
        onScene3DLoad(scene3D) {
            Laya.stage.addChild(scene3D);
            scene3D.addComponent(GameMgr).init(this.owner.getChildByName("uiCursor"));
            scene3D.zOrder = -1;
        }
        onUpdate() {
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("Scripts/GameLanch.ts", GameLanch);
        }
    }
    GameConfig.width = 1080;
    GameConfig.height = 1920;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "Game.scene";
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
