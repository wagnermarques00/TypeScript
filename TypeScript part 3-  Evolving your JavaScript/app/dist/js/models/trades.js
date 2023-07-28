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
}
