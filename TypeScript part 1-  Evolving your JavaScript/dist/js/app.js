import { Trade } from "./models/trade.js";

const trade = new Trade(new Date(), 10, 100);
console.log(trade.volume);
