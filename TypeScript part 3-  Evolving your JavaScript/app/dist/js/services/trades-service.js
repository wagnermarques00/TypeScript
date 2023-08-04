import { Trade } from "../models/trade.js";
export class TradesService {
    getDayTrades() {
        return fetch("http://localhost:8080/data")
            .then((response) => response.json())
            .then((data) => {
            return data.map((todayDate) => {
                return new Trade(new Date(), todayDate.times, todayDate.amount);
            });
        });
    }
}
//# sourceMappingURL=trades-service.js.map