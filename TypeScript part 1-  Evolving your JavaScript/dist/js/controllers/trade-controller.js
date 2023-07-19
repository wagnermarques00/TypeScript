import { Trade } from "../models/trade.js";
export class TradeController {
    constructor() {
        this.inputAmount = document.querySelector("#amount");
        this.inputDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
    }
    add() {
        const trade = this.createTrade();
        console.log(trade);
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
