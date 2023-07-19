import { Trade } from "./models/trade.js";

const trade = new Trade(new Date(), 5, 100);
console.log(`Volume: ${trade.volume}`);
