export class View {
    constructor(selector, escape) {
        this.escape = false;
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Selector ${selector} does not exist in the DOM. Please check.`);
        }
        if (escape) {
            this.escape = escape;
        }
    }
    update(model) {
        const scriptRegularExpression = /<script>[\s|S]*?<\/script>/;
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(scriptRegularExpression, "");
        }
        this.element.innerHTML = template;
    }
}
