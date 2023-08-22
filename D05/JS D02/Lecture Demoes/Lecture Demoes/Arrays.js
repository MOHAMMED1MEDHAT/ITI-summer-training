//var arr = new Array()  // empty Array
//var arr=[]
/*var arr=[2,4,'',true,null] //*/
//var arr = []
//// ======== spars Array
//arr[0] = 10
//arr[1] = 5
//arr[10] = 30
//arr[56] = 12
//arr[99] = 100
//for (var i = 0; i < arr.length; i++) {
//    console.log(arr[i])
//}
//// in operator checks index state
//0 in arr // true
//4 in arr // false

//for (item in arr) {
//    console.log(arr[item])
//   // console.log(item)

//}

//for (item of arr) {
//    console.log(item)
//}
//============================== 
var arr = [20, 12, 3, 22, 90, 5, 1]
//arr.push(2, 50)// add at end of arr and return new length
//arr.pop()
//// return last vakue in arr
//arr.shift()// return first index in arr and decrease arr length
// delete arr[i] // still arr length ==> sparse index

//arr.includes(120) // false
//arr.join("+")
//eval(arr.join("+")) // sum all array indexes

// call back function
//arr.forEach(loop)

//function loop(elm, indx) {
//    console.log(`index : ${indx}  elm :${elm}`)

//}

//arr.forEach(function(elm) {
//    console.log(` elm :${elm}`)

//})

//var result = arr.filter(loop)
//function loop(elm) {
//    //if (elm>20) {
//    //    return elm;
//    //}
//    return elm > 20

//}


//var result = arr.filter(function (elm) {
//      return elm > 20
//})

//arr.sort(loop)                //[20, 12, 3, 22, 90, 5, 1,1]

//function loop(a, b) {
//    if (a > b)
//        return 1;
//    else if (a < b)
//        return -1;
//    else
//        return 0;


//}
//arr.sort(function (a, b) {
//    if (a > b)
//        return 1;
//    else if (a < b)
//        return -1;
//    else
//        return 0;


//})
//arr.sort(function (a, b) {
//       return a-b


//})

arr.sort(function (a, b) {
    return b-a


})  
