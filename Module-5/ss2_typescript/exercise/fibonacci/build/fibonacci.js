"use strict";
let f1 = 0;
let f2 = 1;
let fibonacci;
let sum = 0;
for (let i = 1; i <= 20; i++) {
    fibonacci = f1 + f2;
    f1 = f2;
    f2 = fibonacci;
    sum = f1 + f2 + fibonacci;
}
console.log("Tổng là " + sum);
