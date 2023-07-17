export class Trade {
	#date;
	#quantity;
	#amount;

	constructor(date, quantity, amount) {
		this.#date = date;
		this.#quantity = quantity;
		this.#amount = amount;
	}

	get date() {
		return this.#date;
	}

	get quantity() {
		return this.#quantity;
	}

	get amount() {
		return this.#amount;
	}

	get volume() {
		return this.#quantity * this.#amount;
	}
}
