import { DaysOfWeek } from "../enums/days-of-week.js";
import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
import { MessageView } from "../views/message-view.js";
import { TradesView } from "../views/trades-view.js";
export class TradeController {
    constructor() {
        this.messageView = new MessageView("#message-view");
        this.trades = new Trades();
        this.tradesView = new TradesView("#tradesView", true);
        this.inputAmount = document.querySelector("#amount");
        this.inputDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.tradesView.update(this.trades);
    }
    add() {
        const trade = Trade.create(this.inputAmount.value, this.inputDate.value, this.inputQuantity.value);
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
    isBusinessDay(date) {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
    }
    updateView() {
        this.tradesView.update(this.trades);
        this.messageView.update("Trade added successfully.");
    }
}
