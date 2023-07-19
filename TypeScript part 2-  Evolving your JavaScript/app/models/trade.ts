export class Trade {
	constructor(public readonly amount: number, private _date: Date, public readonly quantity: number) {}

	get date(): Date {
		const date = new Date(this._date.getTime());
		return date;
	}

	get volume(): number {
		return this.quantity * this.amount;
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
