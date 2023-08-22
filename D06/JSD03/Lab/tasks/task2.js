var students = [
    { fname: "ali", age: 22, grade: 100 },
    { fname: "nora", age: 20, grade: 90 },
    { fname: "nada", age: 25, grade: 75 },
    { fname: "heba", age: 19, grade: 50 },
    { fname: "bassem", age: 21, grade: 40 },
];
var text = "";
students.map((element) => {
    text += `\n<h1>${element.fname} : ${element.age} : ${element.grade}</h1>`;
});

text += `\n<h1 style="color:red;">Students have grades greates than 80</h1>`;

var filtered = students.filter((elm) => {
    return elm.grade > 80;
});
filtered.map((element) => {
    text += `\n<h1>${element.fname} : ${element.age} : ${element.grade}</h1>`;
});

text += `\n<h1 style="color:red;">Students orderd assending by name</h1>`;

students.sort((a, b) => a.fname.localeCompare(b.fname));

students.map((element) => {
    text += `\n<h1>${element.fname} : ${element.age} : ${element.grade}</h1>`;
});

document.body.innerHTML = text;
