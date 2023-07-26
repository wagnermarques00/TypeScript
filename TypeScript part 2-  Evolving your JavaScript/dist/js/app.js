import { TradeController } from "./controllers/trade-controller.js";
const controller = new TradeController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        controller.add();
    });
}
else {
    throw Error("Could not initialize the application. Please check if the 'form' exists.");
}
