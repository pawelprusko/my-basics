function zwrot (a,b,c) {
    if (a>b && a>c) {
        return a;
    }
    if (b>a && b>c) {
        return b;
    }
    return c;
}
console.log(zwrot(1,2,3));