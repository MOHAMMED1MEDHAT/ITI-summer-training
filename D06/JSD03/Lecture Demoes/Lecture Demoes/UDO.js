//var str= new String("php summer training")

// json ==> javascript object notation
//var arr // variable
//arr = [] // typeof arr ==> Array
/*arr = {} // Arr object*/
var car = {
    "color": "red",
    "model":2023,
    "motor": "1600 cc",
    "brand": "BMW",
    "price": function (x) {
        (x == "x6" ? console.log(`price= 5000$`) : console.warn("car not available"))

    },
    "classes": ["1st", "2nd", "3rd"],
    "isSport": true,
    "owner": {"_name":'ali', "Age":30}
}
     // in operator 
"color" in car  // true 
"toString" in car  // true
car.hasOwnProperty("color") //true
car.hasOwnProperty("toString") // false
Object.keys(car) //  ['color', 'model', 'motor', 'brand', 'price', 'classes', 'isSport', 'owner']
//for (key in car) {
//    console.log(car[key])
//}

//==================


function Passengers(_name, age, tprice) {
    this.name = _name;
    this.age = age;
    this.tprice = tprice;
    //this.setPrice = function (x) {
    //    this.tprice = x;
    //}
    //this.getPrice = function () {
    //    return this.tprice
    //}

    this.print = function () {
        console.log(` name : ${this.name} Age = ${this.age} price= ${this.tprice}`)
    }


}

var pass = new Passengers("ali",30,3000)

var passengersArray =
    [
    new Passengers("Dina", 30, 6000),
    new Passengers("noor", 40, 5000),
    new Passengers("Kareem", 33, 2000),
    new Passengers("reem", 22, 9000),
    new Passengers("hesham", 42, 3700)
    ]

passengersArray.forEach(function (elm) {
    console.log(elm.print())
})

var result = passengersArray.filter(function (elm) {
   return  elm.tprice >5000
})
console.log(`=============== tprice > 5000`)
result.forEach(function (elm) {
    console.log(elm.print())
})
console.log(`=============== sort by age`)
passengersArray.sort(function (a, b) {

    return a.age - b.age
})

passengersArray.forEach(function (elm) {
    console.log(elm.print())
})
console.log(`=============== sort by name`)

passengersArray.sort(function (a, b) { //Ahmed ahmed basma 

    if (a.name.toUpperCase() > b.name.toUpperCase())
        return 1

    else if (a.name.toUpperCase() < b.name.toUpperCase())
        return -1
    else return 0
})
passengersArray.forEach(function (elm) {
    console.log(elm.print())
})


