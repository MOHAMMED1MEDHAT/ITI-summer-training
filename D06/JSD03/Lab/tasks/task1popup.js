var test = "wlcome to js";
var counter = 0;

setInterval(() => {
    document.body.innerHTML += test.charAt(counter);
    counter += 1;
}, 1000);

setTimeout(() => {
    window.close();
}, 12 * 1000);
