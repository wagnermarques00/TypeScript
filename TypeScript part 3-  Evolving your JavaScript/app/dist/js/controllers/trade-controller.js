var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    constructor() {
        this.trades = new Trades();
        this.tradesView = new TradesView("#tradesView");
        this.messageView = new MessageView("#messageView");
        this.tradesService = new TradesService();
        this.tradesView.update(this.trades);
    }
    add() {
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
    importData() {
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
    isWeekday(date) {
        return date.getDay() > Weekdays.SUNDAY && date.getDay() < Weekdays.SATURDAY;
    }
    clearForm() {
        this.inputDate.value = "";
        this.inputQuantity.value = "";
        this.inputAmount.value = "";
        this.inputDate.focus();
    }
    updateView() {
        this.tradesView.update(this.trades);
        this.messageView.update("Trade added successfully");
    }
}
__decorate([
    domInjector("#date")
], TradeController.prototype, "inputDate", void 0);
__decorate([
    domInjector("#quantity")
], TradeController.prototype, "inputQuantity", void 0);
__decorate([
    domInjector("#value")
], TradeController.prototype, "inputAmount", void 0);
__decorate([
    inspect,
    logExecutionTime()
], TradeController.prototype, "add", null);
//# sourceMappingURL=trade-controller.js.map