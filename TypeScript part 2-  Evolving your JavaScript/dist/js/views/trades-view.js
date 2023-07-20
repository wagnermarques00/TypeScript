import { View } from "./view.js";
export class TradesView extends View {
    template(model) {
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
    formatDate(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
