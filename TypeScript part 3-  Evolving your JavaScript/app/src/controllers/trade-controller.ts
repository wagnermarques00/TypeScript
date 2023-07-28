import { logExecutionTime } from "../decoratos/execution-time-logger.js";
import { Weekdays } from "../enums/week-days.js";
import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
import { MessageView } from "../views/message-view.js";
import { TradesView } from "../views/trades-view.js";

export class TradeController {
	private inputData: HTMLInputElement;
	private inputQuantity: HTMLInputElement;
	private inputAmount: HTMLInputElement;
	private trades = new Trades();
	private tradesView = new TradesView("#tradesView", true);
	private messageView = new MessageView("#messageView");

	constructor() {
		this.inputData = <HTMLInputElement>document.querySelector("#date");
		this.inputQuantity = document.querySelector("#quantity") as HTMLInputElement;
		this.inputAmount = document.querySelector("#value") as HTMLInputElement;
		this.tradesView.update(this.trades);
	}

	@logExecutionTime()
	public add(): void {
		/*
            Hey, have you seen this?
        */
		const trade = Trade.createFrom(this.inputData.value, this.inputQuantity.value, this.inputAmount.value);

		if (!this.isWeekday(trade.date)) {
			this.messageView.update("Only trades on weekdays are accepted");
			return;
		}

		this.trades.add(trade);
		this.clearForm();
		this.updateView();
	}

	private isWeekday(date: Date) {
		return date.getDay() > Weekdays.SUNDAY && date.getDay() < Weekdays.SATURDAY;
	}

	private clearForm(): void {
		this.inputData.value = "";
		this.inputQuantity.value = "";
		this.inputAmount.value = "";
		this.inputData.focus();
	}

	private updateView(): void {
		this.tradesView.update(this.trades);
		this.messageView.update("Trade added successfully");
	}
}
