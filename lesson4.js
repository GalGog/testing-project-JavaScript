function fib(n) {
    var a = 1,
        b = 0,
        x;
    for (i = 0; i < n; i++) {
        x = a + b;
        a = b
        b = x;
    }
    return b;
}