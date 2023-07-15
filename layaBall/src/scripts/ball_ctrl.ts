var State = {
    Idle: 1,
    AddForce: 2,
    ThrowOut: 3,
    CheckOut: 4,
}

export default class ball_ctrl extends Laya.Script3D {

    private state: number = State.Idle;
    private body: Laya.Rigidbody3D = null;
    private MIN_SPEED: number = 0;
    private MAX_SPEED: number = 0;
    private add_force: number = 0;
    private groud_speed: number = 0; 

    private reset(): void {
        this.state = State.Idle;
        this.body.overrideGravity = true;
        this.body.gravity = new Laya.Vector3(0, 0, 0);
    }

    onAwake(): void {
        this.MIN_SPEED = 4.5;
        this.MAX_SPEED = 7;

        this.groud_speed = (this.MAX_SPEED - this.MIN_SPEED) / 3;

        this.body = this.owner.getComponent(Laya.Rigidbody3D);
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.on_touch_start);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.on_touch_end);
        this.reset();
    }

    on_touch_start(): void {
        if(this.state !== State.Idle) {
            return;
        }

        this.state = State.AddForce;
        this.add_force = 0;
    }

    throw_ball(): void {

        this.body.overrideGravity = true;
        this.body.gravity = new Laya.Vector3(0, -10, 0);

        var speed: number = 4.5 + this.add_force; // [min, max] ---> 4.5, 7
        var degree: number = 60; 
        var r = degree * Math.PI / 180;
        var vy: number = speed * Math.sin(r);
        var vz: number = speed * Math.cos(r);

        this.body.linearVelocity = new Laya.Vector3(0, vy, vz);
    }

    on_touch_end(): void {
        if(this.state !== State.AddForce) {
            return;
        }

        this.state = State.ThrowOut;
        this.throw_ball();
    }

    onUpdate(): void {
        if(this.state === State.AddForce) { // 家力
            var dt = Laya.timer.delta / 1000;
            this.add_force += (this.groud_speed * dt);
            this.add_force = (this.add_force > (this.MAX_SPEED - this.MIN_SPEED)) ? (this.MAX_SPEED - this.MIN_SPEED) : this.add_force
        }
    }

    onTriggerEnter(other:laya.d3.physics.PhysicsComponent):void {
        Laya.stage.event("WIN_SOCRE", null);
    }
}

