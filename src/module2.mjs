// named export vs default export

import any_name, {a,b,d} from './module1.mjs'

console.log(any_name);
console.log(a);
console.log(b);
console.log(d);

// because we r using default export variable c from module 1. Here in this file we can store that value in a variable with a name of ur choice. But for variable a, b and d we r using named export so to use them in this file we need to preserve their original names. Also we need to mention that variable inside {}