// "use strict";

// import { capitalize, capitalizeString } from "./exportFunctions.mjs";
import * as capital from "./exportFunctions.mjs"


// const myStr = capitalize("hello!");
const myStr = capital.capitalize("hello!");
console.log(myStr);


// Output
// HELLO!





// const str = capitalizeString("yoooooooo");
const str = capital.capitalizeString("yoooooooo");
console.log(str);

// Yoooooooo