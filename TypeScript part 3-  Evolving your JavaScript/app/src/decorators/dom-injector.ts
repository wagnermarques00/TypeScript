export function domInjector(selector: string) {
	return function (target: any, propertyKey: string) {
		console.log(
			`Modifying prototype "${target.constructor.name}" and adding getter into "${propertyKey}" property`
		);
		let element: HTMLElement;

		const getter = function () {
			if (!element) {
				element = <HTMLElement>document.querySelector(selector);
				console.log(`searching DOM element with the "${selector}" selector for injection into ${propertyKey}`);
			}

			return element;
		};

		Object.defineProperty(target, propertyKey, { get: getter });
	};
}
