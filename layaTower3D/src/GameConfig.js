/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import game_mgr from "./scripts/game_mgr"

export default class GameConfig {
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
