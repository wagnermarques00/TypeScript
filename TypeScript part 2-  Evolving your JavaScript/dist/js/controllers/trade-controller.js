import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
import { TradesView } from "../views/trades-view.js";
export class TradeController {
    constructor() {
        this.trades = new Trades();
        this.tradesView = new TradesView("#tradesView");
        this.inputAmount = document.querySelector("#amount");
        this.inputDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.tradesView.update(this.trades);
    }
    add() {
        const trade = this.createTrade();
        this.trades.add(trade);
        this.tradesView.update(this.trades);
        this.clearForm();
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
}