import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";

export class TradeController {
	private inputAmount: HTMLInputElement;
	private inputDate: HTMLInputElement;
	private inputQuantity: HTMLInputElement;
	private trades: Trades = new Trades();

	constructor() {
		this.inputAmount = document.querySelector("#amount");
		this.inputDate = document.querySelector("#date");
		this.inputQuantity = document.querySelector("#quantity");
	}

	add(): void {
		const trade = this.createTrade();
		this.trades.add(trade);
		this.clearForm();
	}

	clearForm(): void {
		this.inputAmount.value = "";
		this.inputDate.value = "";
		this.inputQuantity.value = "";

		this.inputDate.focus();
	}

	createTrade(): Trade {
		const amount = parseFloat(this.inputAmount.value);
		const dateRegularExpression = /-/g;
		const date = new Date(this.inputDate.value.replace(dateRegularExpression, ","));
		const quantity = parseInt(this.inputQuantity.value);

		return new Trade(amount, date, quantity);
	}
}
