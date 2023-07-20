import { DaysOfWeek } from "../enums/days-of-week.js";
import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
import { MessageView } from "../views/message-view.js";
import { TradesView } from "../views/trades-view.js";
export class TradeController {
    constructor() {
        this.messageView = new MessageView("#message-view");
        this.trades = new Trades();
        this.tradesView = new TradesView("#tradesView");
        this.inputAmount = document.querySelector("#amount");
        this.inputDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.tradesView.update(this.trades);
    }
    add() {
        const trade = this.createTrade();
        if (!this.isBusinessDay(trade.date)) {
            this.messageView.update("The trade can only be made on a business day.");
            return;
        }
        this.trades.add(trade);
        this.clearForm();
        this.updateView();
    }
    clearForm() {
        this.inputAmount.value = "";
        this.inputDate.value = "";
        this.inputQuantity.value = "";
        this.inputDate.focus();
    }
    createTrade() {
        const amount = parseFloat(this.inputAmount.value);
        const dateRegularExpression = /-/g;
        const date = new Date(this.inputDate.value.replace(dateRegularExpression, ","));
        const quantity = parseInt(this.inputQuantity.value);
        return new Trade(amount, date, quantity);
    }
    isBusinessDay(date) {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
    }
    updateView() {
        this.tradesView.update(this.trades);
        this.messageView.update("Trade added successfully.");
    }
}
