import { TradeController } from "./controllers/trade-controller.js";

const controller = new TradeController();
const form = document.querySelector(".form");
if (form) {
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		controller.add();
	});
} else {
	throw Error("Couldn't initialize the application. Check if the form exists.");
}

const importButton = document.querySelector("#import-button");
if (importButton) {
	importButton.addEventListener("click", () => {
		controller.importData();
	});
} else {
	throw Error("Input button doesn't exists.");
}
