export abstract class View<T> {
	protected element: HTMLElement;
	private escape: boolean = false;

	constructor(selector: string, escape?: boolean) {
		const element = document.querySelector(selector);
		if (element) {
			this.element = element as HTMLElement;
		} else {
			throw Error(`Selector ${selector} does not exist in the DOM. Please check.`);
		}
		if (escape) {
			this.escape = escape;
		}
	}

	public update(model: T): void {
		const scriptRegularExpression = /<script>[\s|S]*?<\/script>/;
		let template = this.template(model);
		if (this.escape) {
			template = template.replace(scriptRegularExpression, "");
		}
		this.element.innerHTML = template;
	}

	protected abstract template(model: T): string;
}
