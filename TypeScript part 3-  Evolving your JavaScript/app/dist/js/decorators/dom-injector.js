export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`Modifying prototype "${target.constructor.name}" and adding getter into "${propertyKey}" property`);
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log(`searching DOM element with the "${selector}" selector for injection into ${propertyKey}`);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map