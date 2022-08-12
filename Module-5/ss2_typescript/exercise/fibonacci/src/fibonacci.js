function fibo(number) {
    if (number <= 1) {
        return number;
    }
    return fibo(number - 1) + fibo(number - 2);
}
var sum = 0;
for (var i = 1; i <= 20; i++) {
    console.log(fibo(i));
    sum += fibo(i);
}
console.log("Tổng là " + sum);
