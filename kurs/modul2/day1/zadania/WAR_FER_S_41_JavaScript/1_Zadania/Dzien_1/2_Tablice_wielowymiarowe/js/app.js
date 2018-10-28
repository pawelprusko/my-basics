var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
console.log(task1Array[3][2]);
var task1 = task1Array[1];
console.log(task1.length);
console.log(task1Array[4][2]);

console.log(task2Array[0]);

for (var a of task2Array) {
    console.log(a.length);
}

function print2DArray(tab) {
    for (var a of tab) {
        var beta = a;
        for (var b of beta) {
            var gamma = console.log(b);
        }
    }
    return gamma
}

console.log(print2DArray(task2Array))

function create2DArray(rows, columns) {
    var tab = [];
    var counter = 0;
    for (i = 0; i < rows; i++) {
        var subtab = [];
        for (j = 0; j < columns; j++) {
            counter++;
            subtab.push(counter);
        }
        tab.push(subtab)

    }
    return tab
}

console.log(create2DArray(4, 4))