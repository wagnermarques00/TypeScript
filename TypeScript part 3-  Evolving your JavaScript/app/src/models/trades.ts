import { MyObject } from "../interfaces/my-object.js";
import { Trade } from "./trade.js";

export class Trades implements MyObject<Trades> {
	private trades: Trade[] = [];

	public add(trade: Trade) {
		this.trades.push(trade);
	}

	public getList(): readonly Trade[] {
		return this.trades;
	}

	public isEqual(trades: Trades): boolean {
		return JSON.stringify(this.trades) === JSON.stringify(trades.getList());
	}

	public toString(): string {
		return JSON.stringify(this.trades, null, 2);
	}
}
