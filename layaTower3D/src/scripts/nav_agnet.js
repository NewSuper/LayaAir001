// 控制2D物体---》Laya.Script3D
// 2D --->Laya.Script

// var tower_roads = require("./tower_roads");   // Laya 2.4 以后，步要使用require;
import tower_roads from "./tower_roads";

export default class nav_agent extends Laya.Script3D {
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
        var dst = new Laya.Vector3(-this.road_data[this.next_step].x, 0, this.road_data[this.next_step].z)

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
