var str = new String("Web Development Tutorial");
var maximum = 0;
var maxIdx = 0;
var words = str.split(" ");
for (var i = 0; i < words.length; i++) {
    if (words[i].length >= maximum) {
        maximum = words[i].length;
        maxIdx = i;
    }
}
console.log(words[maxIdx]);
