export function inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Method ${propertyKey}`);
        console.log(`------ Parameters: ${JSON.stringify(args)}`);
        const returned = originalMethod.apply(this, args);
        console.log(`------ return: ${JSON.stringify(returned)}`);
        return returned;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map