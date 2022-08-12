function fibo(number: number): number {
    if (number <= 1) {
        return number;
    }
    return fibo(number - 1) + fibo(number - 2);
}

let sum = 0;
for (let i = 1; i <= 20; i++) {
    console.log(fibo(i));
    sum += fibo(i);
}
console.log("Tổng là " + sum)




