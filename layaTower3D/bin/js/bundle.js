(function () {
	'use strict';

	var tower_roads = {
		roads: [
			[
				{ x: -0.1663617, y: 1.104814E-16, z: 2.985384 },
				{ x: -0.1665478, y: 1.101216E-16, z: 2.975661 },
				{ x: -0.1670585, y: 1.091085E-16, z: 2.948286 },
				{ x: -0.1678227, y: 1.07542E-16, z: 2.905957 },
				{ x: -0.1687691, y: 1.055218E-16, z: 2.851368 },
				{ x: -0.1698267, y: 1.031477E-16, z: 2.787215 },
				{ x: -0.1709242, y: 1.005194E-16, z: 2.716193 },
				{ x: -0.1719905, y: 9.77366E-17, z: 2.640999 },
				{ x: -0.1729543, y: 9.489918E-17, z: 2.564328 },
				{ x: -0.1737445, y: 9.210684E-17, z: 2.488874 },
				{ x: -0.17429, y: 8.945933E-17, z: 2.417335 },
				{ x: -0.1745194, y: 8.705642E-17, z: 2.352404 },
				{ x: -0.1743617, y: 8.499785E-17, z: 2.296778 },
				{ x: -0.1736485, y: 8.317577E-17, z: 2.247542 },
				{ x: -0.1723502, y: 8.141272E-17, z: 2.199902 },
				{ x: -0.1706039, y: 7.970405E-17, z: 2.153731 },
				{ x: -0.1685469, y: 7.804512E-17, z: 2.108904 },
				{ x: -0.1663163, y: 7.643126E-17, z: 2.065295 },
				{ x: -0.1640492, y: 7.485783E-17, z: 2.022778 },
				{ x: -0.1618829, y: 7.332019E-17, z: 1.981229 },
				{ x: -0.1599543, y: 7.181368E-17, z: 1.940521 },
				{ x: -0.1584008, y: 7.033366E-17, z: 1.900528 },
				{ x: -0.1573595, y: 6.887547E-17, z: 1.861125 },
				{ x: -0.1569674, y: 6.743445E-17, z: 1.822187 },
				{ x: -0.1573617, y: 6.600598E-17, z: 1.783587 },
				{ x: -0.1577767, y: 6.462593E-17, z: 1.746296 },
				{ x: -0.1575753, y: 6.332223E-17, z: 1.711068 },
				{ x: -0.157088, y: 6.207826E-17, z: 1.677454 },
				{ x: -0.1566452, y: 6.087739E-17, z: 1.645004 },
				{ x: -0.1565775, y: 5.9703E-17, z: 1.613271 },
				{ x: -0.1572151, y: 5.853848E-17, z: 1.581803 },
				{ x: -0.1588887, y: 5.73672E-17, z: 1.550153 },
				{ x: -0.1619287, y: 5.617253E-17, z: 1.517871 },
				{ x: -0.1666656, y: 5.493786E-17, z: 1.484509 },
				{ x: -0.1734297, y: 5.364657E-17, z: 1.449616 },
				{ x: -0.1825516, y: 5.228203E-17, z: 1.412744 },
				{ x: -0.1943617, y: 5.082761E-17, z: 1.373443 },
				{ x: -0.2083141, y: 4.925399E-17, z: 1.330921 },
				{ x: -0.2237009, y: 4.75606E-17, z: 1.285163 },
				{ x: -0.2406094, y: 4.577404E-17, z: 1.236887 },
				{ x: -0.2591274, y: 4.392089E-17, z: 1.186812 },
				{ x: -0.2793421, y: 4.202773E-17, z: 1.135656 },
				{ x: -0.3013412, y: 4.012116E-17, z: 1.084138 },
				{ x: -0.3252122, y: 3.822775E-17, z: 1.032975 },
				{ x: -0.3510425, y: 3.637411E-17, z: 0.9828863 },
				{ x: -0.3789196, y: 3.458679E-17, z: 0.9345903 },
				{ x: -0.4089312, y: 3.28924E-17, z: 0.888805 },
				{ x: -0.4411645, y: 3.131753E-17, z: 0.8462495 },
				{ x: -0.4757073, y: 2.988875E-17, z: 0.8076414 },
				{ x: -0.5134512, y: 2.860473E-17, z: 0.7729453 },
				{ x: -0.5548685, y: 2.743563E-17, z: 0.7413543 },
				{ x: -0.5994167, y: 2.636526E-17, z: 0.7124312 },
				{ x: -0.6465542, y: 2.537741E-17, z: 0.685738 },
				{ x: -0.6957384, y: 2.445591E-17, z: 0.6608375 },
				{ x: -0.7464274, y: 2.358455E-17, z: 0.637292 },
				{ x: -0.7980788, y: 2.274715E-17, z: 0.6146641 },
				{ x: -0.8501508, y: 2.19275E-17, z: 0.592516 },
				{ x: -0.9021008, y: 2.110943E-17, z: 0.5704105 },
				{ x: -0.9533873, y: 2.027674E-17, z: 0.5479096 },
				{ x: -1.003467, y: 1.941323E-17, z: 0.5245763 },
				{ x: -1.0518, y: 1.850271E-17, z: 0.4999725 },
				{ x: -1.099998, y: 1.759377E-17, z: 0.4754118 },
				{ x: -1.149682, y: 1.673501E-17, z: 0.4522066 },
				{ x: -1.200315, y: 1.591022E-17, z: 0.4299195 },
				{ x: -1.251362, y: 1.51032E-17, z: 0.4081125 },
				{ x: -1.302287, y: 1.429775E-17, z: 0.3863479 },
				{ x: -1.352555, y: 1.347766E-17, z: 0.364188 },
				{ x: -1.40163, y: 1.262675E-17, z: 0.3411949 },
				{ x: -1.448976, y: 1.17288E-17, z: 0.3169309 },
				{ x: -1.494058, y: 1.076762E-17, z: 0.2909583 },
				{ x: -1.53634, y: 9.726995E-18, z: 0.262839 },
				{ x: -1.575286, y: 8.590744E-18, z: 0.2321358 },
				{ x: -1.610362, y: 7.342649E-18, z: 0.1984102 },
				{ x: -1.64262, y: 5.971551E-18, z: 0.161361 },
				{ x: -1.673317, y: 4.487997E-18, z: 0.121273 },
				{ x: -1.702218, y: 2.908409E-18, z: 0.07858996 },
				{ x: -1.729089, y: 1.249173E-18, z: 0.03375474 },
				{ x: -1.753696, y: -4.732888E-19, z: -0.01278892 },
				{ x: -1.775804, y: -2.242589E-18, z: -0.06059825 },
				{ x: -1.79518, y: -4.042304E-18, z: -0.1092294 },
				{ x: -1.811588, y: -5.856051E-18, z: -0.1582398 },
				{ x: -1.824795, y: -7.667403E-18, z: -0.2071854 },
				{ x: -1.834566, y: -9.459977E-18, z: -0.2556237 },
				{ x: -1.840667, y: -1.121735E-17, z: -0.3031106 },
				{ x: -1.842864, y: -1.292313E-17, z: -0.3492036 },
				{ x: -1.841016, y: -1.46244E-17, z: -0.394973 },
				{ x: -1.83529, y: -1.636905E-17, z: -0.4415844 },
				{ x: -1.825911, y: -1.814181E-17, z: -0.4887353 },
				{ x: -1.813105, y: -1.992744E-17, z: -0.536124 },
				{ x: -1.797098, y: -2.171068E-17, z: -0.5834481 },
				{ x: -1.778115, y: -2.347629E-17, z: -0.6304059 },
				{ x: -1.756382, y: -2.520902E-17, z: -0.6766952 },
				{ x: -1.732124, y: -2.689362E-17, z: -0.7220138 },
				{ x: -1.705567, y: -2.851481E-17, z: -0.7660595 },
				{ x: -1.676937, y: -3.005738E-17, z: -0.8085307 },
				{ x: -1.646459, y: -3.150607E-17, z: -0.8491253 },
				{ x: -1.61436, y: -3.284561E-17, z: -0.887541 },
				{ x: -1.579587, y: -3.409747E-17, z: -0.9248341 },
				{ x: -1.541227, y: -3.529196E-17, z: -0.9620075 },
				{ x: -1.499708, y: -3.642707E-17, z: -0.9986765 },
				{ x: -1.455461, y: -3.750079E-17, z: -1.034457 },
				{ x: -1.408916, y: -3.851111E-17, z: -1.068964 },
				{ x: -1.3605, y: -3.945606E-17, z: -1.101815 },
				{ x: -1.310645, y: -4.033362E-17, z: -1.132626 },
				{ x: -1.25978, y: -4.114179E-17, z: -1.161011 },
				{ x: -1.208336, y: -4.187857E-17, z: -1.186586 },
				{ x: -1.156739, y: -4.254196E-17, z: -1.208968 },
				{ x: -1.105422, y: -4.312996E-17, z: -1.227773 },
				{ x: -1.054813, y: -4.364058E-17, z: -1.242616 },
				{ x: -1.004448, y: -4.405325E-17, z: -1.252722 },
				{ x: -0.9535623, y: -4.43571E-17, z: -1.258016 },
				{ x: -0.9021363, y: -4.45646E-17, z: -1.259167 },
				{ x: -0.8501499, y: -4.468822E-17, z: -1.256841 },
				{ x: -0.7975835, y: -4.474046E-17, z: -1.251706 },
				{ x: -0.7444162, y: -4.473379E-17, z: -1.244428 },
				{ x: -0.6906284, y: -4.468069E-17, z: -1.235677 },
				{ x: -0.6362002, y: -4.459365E-17, z: -1.226117 },
				{ x: -0.581112, y: -4.448515E-17, z: -1.216419 },
				{ x: -0.5253429, y: -4.436766E-17, z: -1.207247 },
				{ x: -0.4688733, y: -4.425368E-17, z: -1.199271 },
				{ x: -0.4116832, y: -4.415567E-17, z: -1.193157 },
				{ x: -0.353633, y: -4.4023E-17, z: -1.187353 },
				{ x: -0.2946541, y: -4.380984E-17, z: -1.180144 },
				{ x: -0.2348362, y: -4.353585E-17, z: -1.171952 },
				{ x: -0.1742687, y: -4.322072E-17, z: -1.163198 },
				{ x: -0.1130413, y: -4.288413E-17, z: -1.154305 },
				{ x: -0.05124211, y: -4.254576E-17, z: -1.145693 },
				{ x: 0.01103914, y: -4.222527E-17, z: -1.137785 },
				{ x: 0.07371318, y: -4.194236E-17, z: -1.131002 },
				{ x: 0.1366901, y: -4.171671E-17, z: -1.125766 },
				{ x: 0.1998821, y: -4.156798E-17, z: -1.122499 },
				{ x: 0.2631992, y: -4.151586E-17, z: -1.121623 },
				{ x: 0.3265521, y: -4.158003E-17, z: -1.123559 },
				{ x: 0.3903822, y: -4.181622E-17, z: -1.129941 },
				{ x: 0.4550695, y: -4.223843E-17, z: -1.14135 },
				{ x: 0.5204289, y: -4.280374E-17, z: -1.156625 },
				{ x: 0.5862762, y: -4.346923E-17, z: -1.174608 },
				{ x: 0.652427, y: -4.419197E-17, z: -1.194138 },
				{ x: 0.7186964, y: -4.492903E-17, z: -1.214054 },
				{ x: 0.7849014, y: -4.563751E-17, z: -1.233198 },
				{ x: 0.8508573, y: -4.627446E-17, z: -1.25041 },
				{ x: 0.9163795, y: -4.679697E-17, z: -1.264529 },
				{ x: 0.9812831, y: -4.716211E-17, z: -1.274396 },
				{ x: 1.045385, y: -4.732696E-17, z: -1.27885 },
				{ x: 1.108501, y: -4.72486E-17, z: -1.276733 },
				{ x: 1.170927, y: -4.693913E-17, z: -1.268371 },
				{ x: 1.233053, y: -4.645309E-17, z: -1.255237 },
				{ x: 1.294836, y: -4.581119E-17, z: -1.237892 },
				{ x: 1.35623, y: -4.503413E-17, z: -1.216894 },
				{ x: 1.41719, y: -4.414263E-17, z: -1.192805 },
				{ x: 1.477671, y: -4.31574E-17, z: -1.166182 },
				{ x: 1.53763, y: -4.209915E-17, z: -1.137586 },
				{ x: 1.597021, y: -4.098858E-17, z: -1.107577 },
				{ x: 1.6558, y: -3.98464E-17, z: -1.076714 },
				{ x: 1.713921, y: -3.869335E-17, z: -1.045556 },
				{ x: 1.771341, y: -3.75501E-17, z: -1.014664 },
				{ x: 1.828015, y: -3.643739E-17, z: -0.9845962 },
				{ x: 1.882613, y: -3.528064E-17, z: -0.953339 },
				{ x: 1.93434, y: -3.400984E-17, z: -0.9190001 },
				{ x: 1.983948, y: -3.265246E-17, z: -0.8823214 },
				{ x: 2.032192, y: -3.123598E-17, z: -0.8440459 },
				{ x: 2.079823, y: -2.97879E-17, z: -0.8049166 },
				{ x: 2.127594, y: -2.833572E-17, z: -0.7656764 },
				{ x: 2.176259, y: -2.69069E-17, z: -0.7270672 },
				{ x: 2.22657, y: -2.552893E-17, z: -0.6898324 },
				{ x: 2.279282, y: -2.422931E-17, z: -0.6547145 },
				{ x: 2.335145, y: -2.303553E-17, z: -0.6224567 },
				{ x: 2.394914, y: -2.197506E-17, z: -0.593801 },
				{ x: 2.459342, y: -2.107538E-17, z: -0.5694904 },
				{ x: 2.53176, y: -2.032737E-17, z: -0.5492778 },
				{ x: 2.613463, y: -1.969521E-17, z: -0.5321959 },
				{ x: 2.702158, y: -1.916639E-17, z: -0.5179063 },
				{ x: 2.795549, y: -1.872841E-17, z: -0.5060716 },
				{ x: 2.89134, y: -1.836878E-17, z: -0.4963538 },
				{ x: 2.987233, y: -1.8075E-17, z: -0.4884153 },
				{ x: 3.080936, y: -1.783455E-17, z: -0.481918 },
				{ x: 3.17015, y: -1.763494E-17, z: -0.4765243 },
				{ x: 3.25258, y: -1.746367E-17, z: -0.4718962 },
				{ x: 3.325931, y: -1.730823E-17, z: -0.4676961 },
				{ x: 3.387906, y: -1.715613E-17, z: -0.4635861 },
				{ x: 3.43621, y: -1.699486E-17, z: -0.4592283 },
			],

		],
	};

	// 控制2D物体---》Laya.Script3D

	class nav_agent extends Laya.Script3D {
	    onAwake() {
	        this.road_data = tower_roads.roads[0];

	        this.speed = 5;

	        this.walk_on_road();
	    }

	    walk_on_road() {
	        if(this.road_data.length < 2) {
	            return;
	        }

	        this.owner.transform.localPosition = new Laya.Vector3(-this.road_data[0].x, 0, this.road_data[0].z);
	        this.next_step = 1;

	        this.walk_to_next();
	    }

	    walk_to_next() {
	        if(this.next_step >= this.road_data.length) {
	            this.is_walking = false;
	            return;
	        }

	        var src = this.owner.transform.localPosition;
	        var dst = new Laya.Vector3(-this.road_data[this.next_step].x, 0, this.road_data[this.next_step].z);

	        var dir = new Laya.Vector3();
	        Laya.Vector3.subtract(dst, src, dir);
	        var len = Laya.Vector3.scalarLength(dir);
	        if(len <= 0) {
	            this.next_step ++;
	            this.walk_to_next();
	            return;
	        }

	        this.walk_time = len / this.speed;
	        this.passed_time = 0;

	        this.vx = this.speed * dir.x / len;
	        this.vy = this.speed * dir.y / len;
	        this.vz = this.speed * dir.z / len;

	        // 插值;
	        this.owner.transform.lookAt(dst, new Laya.Vector3(0, 1, 0), true);
	        // end 
	        
	        this.is_walking = true;
	    }

	    onUpdate() {
	        if(this.is_walking === false) {
	            return;
	        }

	        
	        var dt = Laya.timer.delta / 1000;
	        this.passed_time += dt;
	        if(this.passed_time > this.walk_time) {
	            dt -= (this.passed_time - this.walk_time);
	        }

	        var pos = this.owner.transform.localPosition;
	        pos.x += (this.vx * dt);
	        pos.y += (this.vy * dt);
	        pos.z += (this.vz * dt);
	        this.owner.transform.localPosition = pos;

	        if(this.passed_time >= this.walk_time) {
	            this.next_step ++;
	            this.walk_to_next();
	        }
	    }
	}

	class game_mgr extends Laya.Script {
	    onAwake() {
	        // console.log("onAwake");
	        // 框架初始化
	        // end 

	        this.enter_game_scene();
	    }

	    enter_game_scene() {
	        // 装载我们的3D场景
	        Laya.Scene3D.load("res/scenes3D/LayaScene_tower/Conventional/tower.ls", Laya.Handler.create(this, this.on_scene3D_loaded));
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

	/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */

	class GameConfig {
	    static init() {
	        //注册Script或者Runtime引用
	        let reg = Laya.ClassUtils.regClass;
			reg("scripts/game_mgr.js",game_mgr);
	    }
	}
	GameConfig.width = 960;
	GameConfig.height = 640;
	GameConfig.scaleMode ="fixedheight";
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
			//根据IDE设置初始化引擎		
			if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
			else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
			Laya["Physics"] && Laya["Physics"].enable();
			Laya["DebugPanel"] && Laya["DebugPanel"].enable();
			Laya.stage.scaleMode = GameConfig.scaleMode;
			Laya.stage.screenMode = GameConfig.screenMode;
			Laya.stage.alignV = GameConfig.alignV;
			Laya.stage.alignH = GameConfig.alignH;
			//兼容微信不支持加载scene后缀场景
			Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

			//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
			if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
			if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
			if (GameConfig.stat) Laya.Stat.show();
			Laya.alertGlobalError = true;

			//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
			Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
		}

		onVersionLoaded() {
			//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
			Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
		}

		onConfigLoaded() {
			//加载IDE指定的场景
			GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
		}
	}
	//激活启动类
	new Main();

}());
