let login = prompt("Enter username");
let message;
login == "Employee"
    ? (message = "Hello")
    : login == "Director"
    ? (message = "Greetings")
    : login == ""
    ? (message = "No login")
    : (message = "");

// let login = prompt("Enter username");
// let message;
// login == "Employee"? (message = "Hello") : login == "Director"? (message = "Greetings") : login == ""? (message = "No login"): (message = "");

// console.log(message);
