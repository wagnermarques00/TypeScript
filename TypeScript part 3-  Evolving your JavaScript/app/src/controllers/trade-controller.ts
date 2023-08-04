import { domInjector } from "../decorators/dom-injector.js";
import { logExecutionTime } from "../decorators/execution-time-logger.js";
import { inspect } from "../decorators/inspect.js";
import { Weekdays } from "../enums/week-days.js";
import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
import { TradesService } from "../services/trades-service.js";
import { print } from "../utils/print.js";
import { MessageView } from "../views/message-view.js";
import { TradesView } from "../views/trades-view.js";

export class TradeController {
	@domInjector("#date")
	private inputDate: HTMLInputElement;
	@domInjector("#quantity")
	private inputQuantity: HTMLInputElement;
	@domInjector("#value")
	private inputAmount: HTMLInputElement;

	private trades = new Trades();
	private tradesView = new TradesView("#tradesView");
	private messageView = new MessageView("#messageView");
	private tradesService = new TradesService();

	constructor() {
		this.tradesView.update(this.trades);
	}

	@inspect
	@logExecutionTime()
	public add(): void {
		/*
            Hey, have you seen this?
        */
		const trade = Trade.createFrom(this.inputDate.value, this.inputQuantity.value, this.inputAmount.value);

		if (!this.isWeekday(trade.date)) {
			this.messageView.update("Only trades on weekdays are accepted");
			return;
		}

		this.trades.add(trade);
		print(trade, this.trades);
		this.clearForm();
		this.updateView();
	}

	public importData(): void {
		this.tradesService
			.getDayTrades()
			.then((todayTrades) => {
				return todayTrades.filter((todayTrade) => {
					return !this.trades.getList().some((trade) => trade.isEqual(todayTrade));
				});
			})
			.then((todayTrades) => {
				for (let trade of todayTrades) {
					this.trades.add(trade);
				}
				this.tradesView.update(this.trades);
			});
	}

	private isWeekday(date: Date) {
		return date.getDay() > Weekdays.SUNDAY && date.getDay() < Weekdays.SATURDAY;
	}

	private clearForm(): void {
		this.inputDate.value = "";
		this.inputQuantity.value = "";
		this.inputAmount.value = "";
		this.inputDate.focus();
	}

	private updateView(): void {
		this.tradesView.update(this.trades);
		this.messageView.update("Trade added successfully");
	}
}
