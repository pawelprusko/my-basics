var n = 5;
for (var i = 0; i<n; i++) {
    var phase = "";
    var counter = 0;
    for (var j = 0; j<n; j++) {
        counter++;
        if (counter%2==0) {
            phase +="*"
        } else {
            phase +=""
        }
    }
    console.log(phase);
}