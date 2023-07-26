import { Trades } from "../models/trades.js";
import { View } from "./view.js";

export class TradesView extends View<Trades> {
	protected template(model: Trades): string {
		return `
            <table class="table table-hover table-bordered table-striped">
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
                                <td>${this.formatDate(trade.date)}</td>
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

	private formatDate(date: Date): string {
		return new Intl.DateTimeFormat().format(date);
	}
}
