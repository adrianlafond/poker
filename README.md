# Todo: Snowpack, Preact, TypeScript, Jest

This project is heavily influenced by the (https://github.com/FredKSchott/snowpack/tree/main/create-snowpack-app/app-template-preact-typescript)[Snowpack Preact Typescript template].

## notes

### @testing-libary/preact
The render method from @testing-libary/preact version 3.0.0 and above fails with the error:
```
Browser logs:
  TypeError: require$$0 is not a function
    at _snowpack/pkg/define-data-property.v1.1.1.js:15:30
```
The fix is to use version 2.0.1.
