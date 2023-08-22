//document.title = "php"
//document.body //
//document.write('ali')
//document.write('<h1 align="center">PHP</h1>')
//================ window
//location
//navigator
//document
//innerWidth
//innerHeight

/*open("User Defined Object.html")*/
//open("http//:www.google.com")
//var winobj = open("User Defined Object.html", "child", "width=400,height=400")
//opener //
//name // name for window
//winobj.closed // checks if child window closed or not
//winobj.close() // close child window

/*window.alert("welcomw to js ")*/
/*var _name=prompt("enter ur name") */// return from prompt is string
//var arr=[]
//var size = prompt("how many number will you enter ")
//for (var i = 0; i < Number(size); i++) {
//    arr.push(prompt(`enter number ${i + 1}`))

//}
//alert("sum = " + eval(arr.join('+')))
/*var cnfrm = confirm("are you sure ?")*/

// ============= timers
//setInterval == window.setInterval
//setInterval(loop, 1000)s
//function loop() {
//    console.log("js")
//}


// timerID= setInterval(function () {
//    console.log("js")

//}, 1000)

//clearInterval(timerID)

//setTimeout(function () {

//    console.log("js")
//},1000)

setInterval(function () {

    var dt = new Date();
    document.title = dt.toLocaleTimeString('ar-EG')

},1000)









