function sum(n) {
    if (n == 0) return 0;

    return n + sum(n - 1); //Recursion inside a class → this.methodName()
}
console.log(sum(5))