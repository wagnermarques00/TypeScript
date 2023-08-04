export class Trades {
    constructor() {
        this.trades = [];
    }
    add(trade) {
        this.trades.push(trade);
    }
    getList() {
        return this.trades;
    }
    isEqual(trades) {
        return JSON.stringify(this.trades) === JSON.stringify(trades.getList());
    }
    toString() {
        return JSON.stringify(this.trades, null, 2);
    }
}
//# sourceMappingURL=trades.js.map