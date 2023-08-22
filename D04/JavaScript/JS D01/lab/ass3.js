var str = "thequickbrownfoxjumpsoverthelazydog";
var result = "";
var match = false;
for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < result.length; j++) {
        if (result[j] == str[i]) {
            match = true;
            break;
        } else {
            match = false;
        }
    }
    if (!match) {
        result += str[i];
    }
}
console.log(result);
