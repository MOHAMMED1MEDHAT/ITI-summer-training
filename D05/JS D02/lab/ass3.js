function monthOfDate(date) {
    var day;
    !date ? (day = new Date()) : (day = new Date(date));
    return day.toString().split(" ")[1];
}

console.log("Month now is :", monthOfDate());
