import { Printable } from "./printable.js";
import { Comparable } from "./comparable.js";

export interface MyObject<T> extends Comparable<T>, Printable {}
