export class Trade {
    constructor(_date, quantity, amount) {
        this._date = _date;
        this.quantity = quantity;
        this.amount = amount;
    }
    static createFrom(dateString, quantityString, valueString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ","));
        const quantity = parseInt(quantityString);
        const value = parseFloat(valueString);
        return new Trade(date, quantity, value);
    }
    get volume() {
        return this.quantity * this.amount;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    isEqual(trade) {
        return (this._date.getDate() === trade.date.getDate() &&
            this._date.getMonth() === trade.date.getMonth() &&
            this._date.getFullYear() === trade.date.getFullYear());
    }
    toString() {
        return `
            Date: ${this.date},
            Quantity: ${this.quantity},
            Amount: ${this.amount}
        `;
    }
}
//# sourceMappingURL=trade.js.map