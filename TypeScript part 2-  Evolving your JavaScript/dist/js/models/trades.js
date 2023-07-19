export class Trades {
    constructor() {
        this.trades = [];
    }
    add(trade) {
        this.trades.push(trade);
    }
    list() {
        return [...this.trades];
    }
}
/*
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
*/
