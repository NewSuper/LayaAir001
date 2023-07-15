"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}!function(){var e={mouse_pos:[{x:-182.5,y:7},{x:-11.5,y:7},{x:210.5,y:7},{x:-207.5,y:97.5},{x:10.5,y:97.5},{x:211.5,y:97.5},{x:-212.5,y:197.5},{x:11.5,y:197.5},{x:232.5,y:197.5}],hammer_pos:[{x:-127,y:-58},{x:58,y:-58},{x:256,y:-58},{x:-156,y:37},{x:58,y:37},{x:260,y:37},{x:-161,y:137},{x:66,y:137},{x:282,y:197.5}],score_pos:[{x:-219,y:-38},{x:-35,y:-38},{x:163,y:-38},{x:-249,y:54},{x:-37,y:54},{x:163,y:54},{x:-253,y:153},{x:-39,y:153},{x:186,y:153}]},t=function(e){function mouse(){var e;return _classCallCheck(this,mouse),(e=_possibleConstructorReturn(this,_getPrototypeOf(mouse).call(this))).mouse_type=1,e.time_line=null,e.is_dead=!1,e}return _inherits(mouse,Laya.Script),_createClass(mouse,[{key:"show_mouse",value:function(e,t,o){this.mgr=e,this.mouse_type=t,this.hole_index=o,this.owner.skin="ui/mouse_normal_"+this.mouse_type+".png";var a=Laya.TimeLine.to(this.owner,{scaleX:1,scaleY:1},300);a.to(this.owner,{scaleX:0,scaleY:0},300,null,1e3),a.play(0,!1),a.on(Laya.Event.COMPLETE,this,function(){this.owner.removeSelf()}),this.time_line=a}},{key:"onStart",value:function(){}},{key:"play_mouse",value:function(){null!=this.time_line&&(this.time_line.destroy(),this.time_line=null),this.owner.skin="ui/mouse_hit_"+this.mouse_type+".png";var e=Laya.TimeLine.to(this.owner,{scaleX:0,scaleY:0},300,null,500);e.play(0,!1),e.on(Laya.Event.COMPLETE,this,function(){this.owner.removeSelf()})}},{key:"onClick",value:function(){this.is_dead||(this.is_dead=!0,this.play_mouse(),this.mgr.play_mouse_addScore(this.mouse_type,this.hole_index))}}]),mouse}(),o=function(e){function hammer(){return _classCallCheck(this,hammer),_possibleConstructorReturn(this,_getPrototypeOf(hammer).call(this))}return _inherits(hammer,Laya.Script),_createClass(hammer,[{key:"play_hammer",value:function(){this.owner.alpha=1;var e=Laya.TimeLine.to(this.owner,{rotation:10},100);e.to(this.owner,{rotation:-10},200),e.to(this.owner,{rotation:0},100),e.to(this.owner,{alpha:0},200,null,1e3),e.play(0,!1)}},{key:"onStart",value:function(){}}]),hammer}(),a=function(a){function game_m(){var e;return _classCallCheck(this,game_m),(e=_possibleConstructorReturn(this,_getPrototypeOf(game_m).call(this))).mouse_prefab=null,e.mouse_root=null,e.hammer=null,e.gamescore=null,e.score=0,e}return _inherits(game_m,Laya.Script),_createClass(game_m,null,[{key:"create",value:function(){}}]),_createClass(game_m,[{key:"clone_mouse",value:function(){var o=this.mouse_prefab.create();this.mouse_root.addChild(o);var a=9*Math.random();a=Math.floor(a),o.x=e.mouse_pos[a].x,o.y=e.mouse_pos[a].y;var n=Math.random()<.5?1:2;o.getComponent(t).show_mouse(this,n,a);var s=1e3*(2+2*Math.random());s=Math.floor(s),Laya.timer.once(s,this,this.clone_mouse)}},{key:"play_mouse_addScore",value:function(t,o){this.score+=2==t?100:-100,this.score<0&&(this.score=0,alert("游戏结束")),this.gamescore.text=this.score,this.hammer.x=e.hammer_pos[o].x,this.hammer.y=e.hammer_pos[o].y,this.hammer_com.play_hammer()}},{key:"onStart",value:function(){this.hammer_com=this.hammer.getComponent(o),this.clone_mouse()}}]),game_m}(),n=function(){function GameConfig(){_classCallCheck(this,GameConfig)}return _createClass(GameConfig,null,[{key:"init",value:function(){var e=Laya.ClassUtils.regClass;e("game/game_m.ts",a),e("game/hammer.ts",o),e("game/mouse.ts",t)}}]),GameConfig}();n.width=960,n.height=640,n.scaleMode="fixedwidth",n.screenMode="none",n.alignV="top",n.alignH="left",n.startScene="gameMain.scene",n.sceneRoot="",n.debug=!1,n.stat=!1,n.physicsDebug=!1,n.exportSceneToJson=!0,n.init(),new(function(){function Main(){_classCallCheck(this,Main),window.Laya3D?Laya3D.init(n.width,n.height):Laya.init(n.width,n.height,Laya.WebGL),Laya.Physics&&Laya.Physics.enable(),Laya.DebugPanel&&Laya.DebugPanel.enable(),Laya.stage.scaleMode=n.scaleMode,Laya.stage.screenMode=n.screenMode,Laya.stage.alignV=n.alignV,Laya.stage.alignH=n.alignH,Laya.URL.exportSceneToJson=n.exportSceneToJson,(n.debug||"true"==Laya.Utils.getQueryString("debug"))&&Laya.enableDebugPanel(),n.physicsDebug&&Laya.PhysicsDebugDraw&&Laya.PhysicsDebugDraw.enable(),n.stat&&Laya.Stat.show(),Laya.alertGlobalError=!0,Laya.ResourceVersion.enable("version.json",Laya.Handler.create(this,this.onVersionLoaded),Laya.ResourceVersion.FILENAME_VERSION)}return _createClass(Main,[{key:"onVersionLoaded",value:function(){Laya.AtlasInfoManager.enable("fileconfig.json",Laya.Handler.create(this,this.onConfigLoaded))}},{key:"onConfigLoaded",value:function(){n.startScene&&Laya.Scene.open(n.startScene)}}]),Main}())}();