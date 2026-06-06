import { Vector2 } from "three";

/**
 * Vector2 class with yaw and pitch alias
 */
export default class Rotation extends Vector2 {
	get yaw() {
		return this.x;
	}
	set yaw(value: number) {
		this.x = value;
	}
	get pitch() {
		return this.y;
	}
	set pitch(value: number) {
		this.y = value;
	}
}
