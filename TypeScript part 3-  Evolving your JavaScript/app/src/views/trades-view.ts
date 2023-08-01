import { escape } from "../decorators/escape.js";
import { Trades } from "../models/trades.js";
import { View } from "./view.js";

export class TradesView extends View<Trades> {
	@escape
	protected template(model: Trades): string {
		return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>QUANTITY</th>
                    <th>VALUE</th>
                </tr>
            </thead>
            <tbody>
                ${model
					.getList()
					.map((trade) => {
						return `
                        <tr>
                            <td>${this.formatDate(trade.date)}
                            </td>
                            <td>
                                ${trade.quantity}
                            </td>
                            <td>
                                ${trade.value}
                            </td>
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
