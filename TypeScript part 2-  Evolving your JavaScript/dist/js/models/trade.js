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
/*
export class Trade {
    private _date: Date;
    private _quantity: number;
    private _amount: number;

    constructor(amount: number, date: Date, quantity: number) {
        this._date = date;
        this._quantity = quantity;
        this._amount = amount;
    }

    get date(): Date {
        const date = new Date(this._date.getTime());
        return date;
    }

    get quantity(): number {
        return this._quantity;
    }

    get amount(): number {
        return this._amount;
    }

    get volume(): number {
        return this._quantity * this._amount;
    }
}
*/
