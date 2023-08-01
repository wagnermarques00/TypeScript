export function escape(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;

	descriptor.value = function (...args: any[]) {
		let returned = originalMethod.apply(this, args);

		if (typeof returned === "string") {
			console.log(`@escape in action in "${this.constructor.name}" class for the "${propertyKey}" method`);
			returned = returned.replace(/<script>[\s\S]*?<\/script>/, "");
		}

		return returned;
	};

	return descriptor;
}
