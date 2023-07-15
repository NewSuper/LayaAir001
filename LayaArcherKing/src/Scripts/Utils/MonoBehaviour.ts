import InterfaceBehaviour from "./InterfaceBehaviour";

export default class MonoBehaviour extends Laya.Script3D implements InterfaceBehaviour {
    protected gameObject: Laya.Sprite3D = null;
    protected transfrom: Laya.Transform3D = null;

    onAwake(): void {
        this.gameObject = this.owner as Laya.Sprite3D;
        this.transfrom = this.gameObject.transform;
        this.Awake();
    }

    onStart(): void {
        this.Start();
    }


    onUpdate(): void {
        this.Update();
    }

    onLateUpdate(): void {
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