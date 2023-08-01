export function inspect(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;
	descriptor.value = function (...args: any[]) {
		console.log(`--- Method ${propertyKey}`);
		console.log(`------ Parameters: ${JSON.stringify(args)}`);
		const returned = originalMethod.apply(this, args);
		console.log(`------ return: ${JSON.stringify(returned)}`);
		return returned;
	};

	return descriptor;
}
