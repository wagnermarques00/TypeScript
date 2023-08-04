export function logExecutionTime(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divider = 1;
            let unity = "miliseconds";
            if (inSeconds) {
                divider = 1000;
                unity = "seconds";
            }
            const t1 = performance.now();
            const returned = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, execution time: ${(t2 - t1) / divider} ${unity}`);
            returned;
        };
        return descriptor;
    };
}
//# sourceMappingURL=execution-time-logger.js.map