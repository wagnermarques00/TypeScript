import { DaysOfWeek } from "../enums/days-of-week.js";
import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
import { MessageView } from "../views/message-view.js";
import { TradesView } from "../views/trades-view.js";

export class TradeController {
	private inputAmount: HTMLInputElement;
	private inputDate: HTMLInputElement;
	private inputQuantity: HTMLInputElement;
	private messageView = new MessageView("#message-view");
	private trades: Trades = new Trades();
	private tradesView = new TradesView("#tradesView");

	constructor() {
		this.inputAmount = document.querySelector("#amount");
		this.inputDate = document.querySelector("#date");
		this.inputQuantity = document.querySelector("#quantity");
		this.tradesView.update(this.trades);
	}

	public add(): void {
		const trade = this.createTrade();

		if (!this.isBusinessDay(trade.date)) {
			this.messageView.update("The trade can only be made on a business day.");
			return;
		}

		this.trades.add(trade);
		this.clearForm();
		this.updateView();
	}

	private clearForm(): void {
		this.inputAmount.value = "";
		this.inputDate.value = "";
		this.inputQuantity.value = "";

		this.inputDate.focus();
	}

	private createTrade(): Trade {
		const amount = parseFloat(this.inputAmount.value);
		const dateRegularExpression = /-/g;
		const date = new Date(this.inputDate.value.replace(dateRegularExpression, ","));
		const quantity = parseInt(this.inputQuantity.value);

		return new Trade(amount, date, quantity);
	}

	private isBusinessDay(date: Date) {
		return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
	}

	private updateView(): void {
		this.tradesView.update(this.trades);
		this.messageView.update("Trade added successfully.");
	}
}
