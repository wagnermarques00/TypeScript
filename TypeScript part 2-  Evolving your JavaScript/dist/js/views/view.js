export class View {
    constructor(selector, escape) {
        this.escape = false;
        this.element = document.querySelector(selector);
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
