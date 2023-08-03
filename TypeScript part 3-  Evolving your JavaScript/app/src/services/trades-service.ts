import { DayTrades } from "../interfaces/day-trades.js";
import { Trade } from "../models/trade.js";

export class TradesService {
	public getDayTrades(): Promise<Trade[]> {
		return fetch("http://localhost:8080/data")
			.then((response) => response.json())
			.then((data: DayTrades[]) => {
				return data.map((todayDate) => {
					return new Trade(new Date(), todayDate.times, todayDate.amount);
				});
			});
	}
}
