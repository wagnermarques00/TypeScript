export function escape(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let returned = originalMethod.apply(this, args);
        if (typeof returned === "string") {
            returned = returned.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        return returned;
    };
    return descriptor;
}
//# sourceMappingURL=escape.js.map