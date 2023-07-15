// 挂在2D节点上的，你要用2D 脚本组件Laya.Script;

import GameMgr from "./Game/GameMgr";

// 挂在3D节点上 ，你要用3D  Laya.Script3D;
export default class GameLanch extends Laya.Script { 
    onAwake(): void {
        
        
    }

    onStart(): void {
        Laya.Scene3D.load("res/3D/LayaScene_Game/Conventional/Game.ls", Laya.Handler.create(this, this.onScene3DLoad));
    }

    private onScene3DLoad(scene3D: Laya.Scene3D): void {
        Laya.stage.addChild(scene3D);
        scene3D.addComponent(GameMgr).init(this.owner.getChildByName("uiCursor"));
        scene3D.zOrder = -1;

        
    }

    onUpdate(): void {
        
    }
}