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
		return this._date;
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
