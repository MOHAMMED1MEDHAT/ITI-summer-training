//task 1
var arr = [134, 4132, 21, 3214];

console.log("sum using eval :", eval(arr.join("+")));
console.log("product using eval :", eval(arr.join("*")));

//task 2.1
function sumAll(numbersArray) {
    return eval(numbersArray.join("+"));
}
console.log("sum function :", sumAll([3, 1, 4, 5, 2]));
//task 2.2
function sumAllArgs() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] != undefined) {
            sum += arguments[i];
        }
    }
    return sum;
}
console.log("sum of args :", sumAllArgs(3, 1, 4, 5, 2));
