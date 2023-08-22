//task 1
var arr = [3, 1, 2, 4, 3, 5, 1];
var exists = [];
for (var i = 0; i < arr.length; i++) {
    if (!exists.includes(arr[i])) {
        exists.push(arr[i]);
    }
}
console.log("remove dublicates\n", exists);
//task 2
arr.sort((a, b) => {
    return a - b;
});
console.log("sort\n", arr);
//task 3.1
function filter(arr) {
    var res = [];
    for (i of arr) {
        if (i > 50) {
            res.push(i);
        }
    }
    return res;
}
console.log(
    "user defined filter\n",
    filter([134, 4132, 21, 3214, 23, 534, 3242, 2431])
);
//task 3.2
arr = [134, 4132, 21, 3214, 23, 534, 3242, 2431];
arr = arr.filter((elm) => {
    return elm > 50;
});
console.log("built in filter\n", arr);
//task 4.1
function minAndMax(arr) {
    var min = arr[0],
        max = arr[0];
    for (i of arr) {
        if (i >= max) {
            max = i;
        } else if (i <= min) {
            min = i;
        }
    }
    return `${min} : ${max}`;
}
console.log("user defined min:max\n", minAndMax(arr));
//task 4.2
console.log(
    "Math functions min:max\n",
    Math.min(...arr),
    ":",
    Math.max(...arr)
);
