# Project Name - Alurabank

This is a TypeScript project with some configurations for easy development and deployment. This README will guide you on how to run, compile without running, and provide an explanation of the tsconfig.json configuration.

## How to Run

To run the project, you can use the following steps:

1. Install project dependencies: In the root directory of the project, run the following command to install the required dependencies:

```
npm install
```

1. Compile TypeScript code: To compile the TypeScript code and generate the JavaScript files, run the following command:

```
npm run compile
```

1. Start the development server: After compilation, start the development server using the following command:

```
npm start
```

This will concurrently run the `watch` script (continuous compilation) and the `server` script, allowing you to see the changes in real-time on the browser.

## How to Compile Without Running

If you only want to compile the TypeScript code without starting the development server, you can use the following command:

```
npm run compile
```

This will generate the JavaScript files in the `dist/js` directory based on the TypeScript files in the `app` folder, as specified in the tsconfig.json.

## Explanation of tsconfig.json

The `tsconfig.json` file contains compiler options and other configurations for TypeScript. Below is an explanation of each configuration used in this project:

1. `"experimentalDecorators": true`: This option enables support for experimental decorators in TypeScript. Decorators are a feature that allows you to modify or annotate classes and class members. Note that this is an experimental feature and might change in future TypeScript versions.
2. `"noEmitOnError": true`: This option prevents TypeScript from emitting compiled output (JavaScript files) if there are any errors in the code.
3. `"noImplicitAny": true`: With this option enabled, TypeScript will issue an error when it cannot infer the type of a variable explicitly. It encourages you to provide type annotations for all variables.
4. `"outDir": "dist/js"`: The output directory for compiled JavaScript files. TypeScript will place the generated JavaScript files in the `dist/js` directory.
5. `"removeComments": true`: This option enables the removal of comments from the compiled JavaScript output. When TypeScript transpiles the code to JavaScript, it will exclude any comments in the source code from the generated output in the `dist/js` directory.
6. `"strictNullChecks": true`: This option enforces strict null checks in TypeScript. When `strictNullChecks` is set to `true`, the TypeScript compiler will perform rigorous checks to ensure that variables are not assigned a value of `null` or `undefined` unless explicitly specified in the variable's type.
7. `"target": "ES6"`: This option sets the ECMAScript target version for the compiled code. In this case, the project is targeting ECMAScript 2015 (ES6).