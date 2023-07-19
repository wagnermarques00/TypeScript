import { Trades } from "../models/trades.js";

export class TradesView {
	private element: HTMLElement;

	constructor(selector: string) {
		this.element = document.querySelector(selector);
	}

	template(model: Trades): string {
		return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    ${model
						.list()
						.map((trade) => {
							return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(trade.date)}</td>
                                <td>${trade.quantity}</td>
                                <td>${trade.amount}</td>
                            </tr>
                        `;
						})
						.join("")}
                </tbody>
            </table>
        `;
	}

	update(model: Trades): void {
		this.element.innerHTML = this.template(model);
	}
}
