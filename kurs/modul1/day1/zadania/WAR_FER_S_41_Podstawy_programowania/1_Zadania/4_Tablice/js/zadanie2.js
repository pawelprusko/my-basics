var arr = [];
for (var i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * (60 - 1) + 1));

if (arr[i]%2 != 0) {
    arr[i] ++;
}
    }
console.log(arr);