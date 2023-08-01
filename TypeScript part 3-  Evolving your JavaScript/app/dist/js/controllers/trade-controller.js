var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logExecutionTime } from "../decorators/execution-time-logger.js";
import { Weekdays } from "../enums/week-days.js";
import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
import { MessageView } from "../views/message-view.js";
import { TradesView } from "../views/trades-view.js";
export class TradeController {
    constructor() {
        this.trades = new Trades();
        this.tradesView = new TradesView("#tradesView");
        this.messageView = new MessageView("#messageView");
        this.inputData = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.inputAmount = document.querySelector("#value");
        this.tradesView.update(this.trades);
    }
    add() {
        const trade = Trade.createFrom(this.inputData.value, this.inputQuantity.value, this.inputAmount.value);
        if (!this.isWeekday(trade.date)) {
            this.messageView.update("Only trades on weekdays are accepted");
            return;
        }
        this.trades.add(trade);
        this.clearForm();
        this.updateView();
    }
    isWeekday(date) {
        return date.getDay() > Weekdays.SUNDAY && date.getDay() < Weekdays.SATURDAY;
    }
    clearForm() {
        this.inputData.value = "";
        this.inputQuantity.value = "";
        this.inputAmount.value = "";
        this.inputData.focus();
    }
    updateView() {
        this.tradesView.update(this.trades);
        this.messageView.update("Trade added successfully");
    }
}
__decorate([
    logExecutionTime()
], TradeController.prototype, "add", null);