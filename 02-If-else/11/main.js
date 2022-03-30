// let GPA = +prompt("num");
// if (GPA > 79) {
//     alert("A");
// } else if (GPA > 70) {
//     alert("B");
// } else if (GPA > 60) {
//     alert("C");
// } else if (GPA > 49) {
//     alert("D");
// } else {
//     alert("F");
// }

let GPA = +prompt("num");
let message;
GPA > 79
    ? (message = "A")
    : GPA > 70
    ? (message = "B")
    : GPA > 60
    ? (message = "C")
    : GPA > 49
    ? (message = "D")
    : GPA >= 0
    ? (message = "F")
    : GPA == null || isNaN(GPA)
    ? (message = "invalid")
    : (message = "invalid");

alert(message);

// let login = prompt("Enter username");
// let message;
// login == "Employee"? (message = "Hello") : login == "Director"? (message = "Greetings") : login == ""? (message = "No login"): (message = "");

// console.log(message);
