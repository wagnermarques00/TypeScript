import { MyObject } from "../interfaces/my-object.js";

export class Trade implements MyObject<Trade> {
	constructor(private _date: Date, public readonly quantity: number, public readonly amount: number) {}

	public static createFrom(dateString: string, quantityString: string, valueString: string): Trade {
		const exp = /-/g;
		const date = new Date(dateString.replace(exp, ","));
		const quantity = parseInt(quantityString);
		const value = parseFloat(valueString);
		return new Trade(date, quantity, value);
	}

	get volume(): number {
		return this.quantity * this.amount;
	}

	get date(): Date {
		const date = new Date(this._date.getTime());
		return date;
	}

	public isEqual(trade: Trade): boolean {
		return (
			this._date.getDate() === trade.date.getDate() &&
			this._date.getMonth() === trade.date.getMonth() &&
			this._date.getFullYear() === trade.date.getFullYear()
		);
	}

	public toString(): string {
		return `
            Date: ${this.date},
            Quantity: ${this.quantity},
            Amount: ${this.amount}
        `;
	}
}
