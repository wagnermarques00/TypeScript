import { Printable } from "../interfaces/printable.js";

export function print(...objects: Printable[]) {
	for (let object of objects) {
		console.log(object.toString());
	}
}
