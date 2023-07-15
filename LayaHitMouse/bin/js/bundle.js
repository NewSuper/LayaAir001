(function () {
	'use strict';

	{
	    var game_config = {
	        mouse_pos: [
	            { x: -182.5, y: 7 }, { x: -11.5, y: 7 }, { x: 210.5, y: 7 },
	            { x: -207.5, y: 97.5 }, { x: 10.5, y: 97.5 }, { x: 211.5, y: 97.5 },
	            { x: -212.5, y: 197.5 }, { x: 11.5, y: 197.5 }, { x: 232.5, y: 197.5 },
	        ],
	        hammer_pos: [
	            { x: -127, y: -58 }, { x: 58, y: -58 }, { x: 256, y: -58 },
	            { x: -156, y: 37 }, { x: 58, y: 37 }, { x: 260, y: 37 },
	            { x: -161, y: 137 }, { x: 66, y: 137 }, { x: 282, y: 197.5 },
	        ],
	        score_pos: [
	            { x: -219, y: -38 }, { x: -35, y: -38 }, { x: 163, y: -38 },
	            { x: -249, y: 54 }, { x: -37, y: 54 }, { x: 163, y: 54 },
	            { x: -253, y: 153 }, { x: -39, y: 153 }, { x: 186, y: 153 },
	        ],
	    };
	}

	class mouse extends Laya.Script {
	    constructor() {
	        super();
	        this.mouse_type = 1;
	        this.time_line = null;
	        this.is_dead = false;
	    }
	    show_mouse(mgr, type, hole_index) {
	        this.mgr = mgr;
	        this.mouse_type = type;
	        this.hole_index = hole_index;
	        this.owner.skin = "ui/mouse_normal_" + this.mouse_type + ".png";
	        var time_line = Laya.TimeLine.to(this.owner, { scaleX: 1, scaleY: 1 }, 300);
	        time_line.to(this.owner, { scaleX: 0, scaleY: 0 }, 300, null, 1000);
	        time_line.play(0, false);
	        time_line.on(Laya.Event.COMPLETE, this, function () {
	            this.owner.removeSelf();
	        });
	        this.time_line = time_line;
	    }
	    onStart() {
	    }
	    play_mouse() {
	        if (this.time_line != null) {
	            this.time_line.destroy();
	            this.time_line = null;
	        }
	        this.owner.skin = "ui/mouse_hit_" + this.mouse_type + ".png";
	        var time_line = Laya.TimeLine.to(this.owner, { scaleX: 0, scaleY: 0 }, 300, null, 500);
	        time_line.play(0, false);
	        time_line.on(Laya.Event.COMPLETE, this, function () {
	            this.owner.removeSelf();
	        });
	    }
	    onClick() {
	        if (this.is_dead) {
	            return;
	        }
	        this.is_dead = true;
	        this.play_mouse();
	        this.mgr.play_mouse_addScore(this.mouse_type, this.hole_index);
	    }
	}

	class hammer extends Laya.Script {
	    constructor() {
	        super();
	    }
	    play_hammer() {
	        var time = 100;
	        this.owner.alpha = 1;
	        var time_line = Laya.TimeLine.to(this.owner, { rotation: 10 }, time);
	        time_line.to(this.owner, { rotation: -10 }, time * 2);
	        time_line.to(this.owner, { rotation: 0 }, time);
	        time_line.to(this.owner, { alpha: 0 }, time * 2, null, time * 10);
	        time_line.play(0, false);
	    }
	    onStart() {
	    }
	}

	class game_m extends Laya.Script {
	    static create() { }
	    ;
	    constructor() {
	        super();
	        this.mouse_prefab = null;
	        this.mouse_root = null;
	        this.hammer = null;
	        this.gamescore = null;
	        this.score = 0;
	    }
	    clone_mouse() {
	        var m = this.mouse_prefab.create();
	        this.mouse_root.addChild(m);
	        var hole_index = Math.random() * 9;
	        hole_index = Math.floor(hole_index);
	        m.x = game_config.mouse_pos[hole_index].x;
	        m.y = game_config.mouse_pos[hole_index].y;
	        var mouse_type = (Math.random() < 0.5) ? 1 : 2;
	        m.getComponent(mouse).show_mouse(this, mouse_type, hole_index);
	        var time = (2 + Math.random() * 2) * 1000;
	        time = Math.floor(time);
	        Laya.timer.once(time, this, this.clone_mouse);
	    }
	    play_mouse_addScore(mouse_type, hole_index) {
	        this.score += (mouse_type == 2 ? 100 : -100);
	        if (this.score < 0) {
	            this.score = 0;
	            alert("游戏结束");
	        }
	        this.gamescore.text = this.score;
	        this.hammer.x = game_config.hammer_pos[hole_index].x;
	        this.hammer.y = game_config.hammer_pos[hole_index].y;
	        this.hammer_com.play_hammer();
	    }
	    onStart() {
	        this.hammer_com = this.hammer.getComponent(hammer);
	        this.clone_mouse();
	    }
	}

	class GameConfig {
	    constructor() { }
	    static init() {
	        var reg = Laya.ClassUtils.regClass;
	        reg("game/game_m.ts", game_m);
	        reg("game/hammer.ts", hammer);
	        reg("game/mouse.ts", mouse);
	    }
	}
	GameConfig.width = 960;
	GameConfig.height = 640;
	GameConfig.scaleMode = "fixedwidth";
	GameConfig.screenMode = "none";
	GameConfig.alignV = "top";
	GameConfig.alignH = "left";
	GameConfig.startScene = "gameMain.scene";
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
