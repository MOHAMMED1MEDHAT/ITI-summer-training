function randomArray() {
    var arr = [];
    var randomNum;
    for (var i = 0; i < 8; i++) {
        randomNum = Math.round(Math.random() * 100);
        if (!arr.includes(randomNum)) {
            arr.push(randomNum);
        }
    }
    return arr;
}
console.log("the random array is :", randomArray());
