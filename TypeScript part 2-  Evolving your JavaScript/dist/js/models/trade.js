export class Trade {
    constructor(amount, _date, quantity) {
        this.amount = amount;
        this._date = _date;
        this.quantity = quantity;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    get volume() {
        return this.quantity * this.amount;
    }
    static create(amountString, dateString, quantityString) {
        const amount = parseFloat(amountString);
        const dateRegularExpression = /-/g;
        const date = new Date(dateString.replace(dateRegularExpression, ","));
        const quantity = parseInt(quantityString);
        return new Trade(amount, date, quantity);
    }
}
