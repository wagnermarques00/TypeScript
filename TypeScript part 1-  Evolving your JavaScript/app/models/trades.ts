import { Trade } from "./trade.js";

export class Trades {
	private trades: Array<Trade> = [];

	add(trade: Trade): void {
		this.trades.push(trade);
	}

	list(): ReadonlyArray<Trade> {
		return [...this.trades];
	}
}
