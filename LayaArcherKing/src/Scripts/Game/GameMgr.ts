import MonoBehaviour from "../Utils/MonoBehaviour";

var State = {
    Idle: 0,
    Drawing: 1,
    LookAt: 2,
    Shoot: 3,
    // ... ...
};

export default class GameMgr extends MonoBehaviour {
    private rightHand: Laya.Sprite3D = null;
    private archerAnim: Laya.Animator = null;
    private arrow: Laya.Sprite3D = null;

    private camera: Laya.Camera = null;
    private state: number = 0;
    private uiCursor: Laya.Sprite = null;
    private physicsSimulation: Laya.PhysicsSimulation = null;

    Awake(): void {
        
    }

    public init(uiCursor: Laya.Sprite): void {
        this.uiCursor = uiCursor;
        this.configGame();
    }

    // H5技术:  Javascript/TypeScript;
    private configGame(): void {
        var person = this.gameObject.getChildByName("Person");
        this.camera = person.getChildByName("Main Camera") as Laya.Camera;
        this.rightHand = person.getChildByName("RightHand") as Laya.Sprite3D;
        this.archerAnim = this.rightHand.getChildByName("pkGgreenTB").getComponent(Laya.Animator);
        this.arrow = this.rightHand.getChildByName("pkJMrubyC") as Laya.Sprite3D;
        this.physicsSimulation = (this.owner as Laya.Scene3D).physicsSimulation;
        this.reset();
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onTouchStart);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onTouchEnd);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onTouchMove);
    }

    private reset(): void {
        this.uiCursor.visible = false;
        this.state = State.Idle;
        this.archerAnim.play("Idle");
    }

    private onTouchStart(): void {
        if (this.state !== State.Idle) {
            return;
        }

        this.state = State.Drawing;
        this.archerAnim.play("Draw");

        Laya.Tween.to(this.arrow.transform, {localPositionZ: 0.132}, 667);

        this.gameObject.timerOnce(1000, this, function() {
            this.state = State.LookAt;
            this.uiCursor.visible = true;

            this.lookTarget();
        });
    }

    private lookTarget(): void {

        var point = new Laya.Vector2(Laya.stage.mouseX, Laya.stage.mouseY);
        var ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0 ,1));
        this.camera.viewportPointToRay(point, ray);

        var resultHit = new Laya.HitResult();
        if(this.physicsSimulation.rayCast(ray, resultHit)) {
            var pt = resultHit.point;
            this.rightHand.transform.lookAt(pt, new Laya.Vector3(0, 1, 0), false);

            // 更新cursor 位置
            var screenPoint = new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY);
            var pos = (this.uiCursor.parent as Laya.Sprite).fromStagePoint(screenPoint)
            this.uiCursor.pos(pos.x, pos.y);
            // end 
        }
    }

    private onTouchMove(): void {
        if (this.state !== State.LookAt) {
            return;
        }

        this.lookTarget();
    }

    private onTouchEnd(): void {

        if (this.state !== State.LookAt) {
            return;
        }

        this.state = State.Shoot;
        this.uiCursor.visible = false;

        this.shootArrow();
    }

    private shootArrow(): void {
        this.archerAnim.play("Idle");
    }

    Start(): void {

    }

    Update(): void {

    }
}