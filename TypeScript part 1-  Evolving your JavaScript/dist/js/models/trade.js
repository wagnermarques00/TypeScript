export class Trade {
    constructor(amount, date, quantity) {
        this._date = date;
        this._quantity = quantity;
        this._amount = amount;
    }
    get date() {
        return this._date;
    }
    get quantity() {
        return this._quantity;
    }
    get amount() {
        return this._amount;
    }
    get volume() {
        return this._quantity * this._amount;
    }
}
