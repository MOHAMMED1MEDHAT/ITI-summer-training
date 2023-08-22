function fun1() {
    console.log(`welcome from first fun`)
} // function declration

fun1()// Calling

fun1 // function body or function declaration


function sayHi(_name) {

    console.log(`HI  : ${_name}`)


}

//sayHi('ali') // HI : ali

//sayHi('rana', 'ali') // HI : rana
//sayHi() // HI : undefined
//sayHI  // function declaration

//function myFun(num) {
//    (num > 2 ? console.log(`res =${num * 2}`) : console.warn(`num less than 2`))
//}


//function square(num) {
//    return num * num;
//}

//// optinal params

//function square(num) {
//    (num == undefined ? console.log(`plz enter value for num`) : console.log(num * num))

//}

// defaulr args

//function sum(num1=1,num2=0) {
//    return num1 + num2;
//}

// argument
//function sumAll() {
//    /*console.log(arguments)*/
//    var sum = 0;
//    for (var i = 0; i < arguments.length; i++) {
//        sum += arguments[i]
//    }
//    console.log(`sum =${sum}`)
//}

// ============  Math
//Math.PI
//Math.pow(5, 2)
//Math.round(2.4)
//Math.ceil(2.2)
//Math.floor(2.9)
//Math.random()
//Math.floor(Math.random() * 10)

//var dt = new Date()
//dt.getFullYear()
//dt.getHours()
//dt.getMinutes()
//dt.getDay() // number
//dt.getMonth() // numbers 

//var days = ["sunDay", "monDay", "tuesDay", "wednesDay", "thursDay", "FriDay", "SaturDay"]

//console.log(`toDay is ${days[dt.getDay()]}`)

//dt.toString().split(' ')[1]