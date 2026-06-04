import type { Vector3 } from "three";
import type Client from "./client.js";
import { PhysicsPlayer } from "./movement/move.js";
import { World } from "./movement/world.js";

const world = new World();

export default class Player {
	health = 20;
	physics: PhysicsPlayer;
	constructor(
		public client: Client,
		public name: string,
		public gamemode: string,
		pos: Vector3,
		public uuid: string = crypto.randomUUID(),
	) {
		this.physics = new PhysicsPlayer(world, pos);
	}
}
