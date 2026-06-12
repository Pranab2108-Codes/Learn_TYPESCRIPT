"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet = function (name) { return "Hello, ".concat(name, "!"); }; /* Here we can say after changing the version of target from modern version(esnext) to oldest version(es5) we can see the Arrow function is no longer showing in it's corresponding Javascript file. */
/* As we know the Typescript file is not recognize by browser so it will covert the Javascript file which normally interact with the browser. */
/* Let's suppose we are running our browser through Internet Explorer which doesn't support the modern version of target by ECMASCRIPT so we are converting the target from modern version to oldest version so it could run our code, but it will only support normal function declaration, no more support new Arrow function. */ 
//# sourceMappingURL=targetTSConfig2.js.map