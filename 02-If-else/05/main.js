let user = prompt("input your num");
let message = "";
if (user === null || user.trim() === "" || isNaN(user)) {
    message = "Invalid number";
} else if (user % 2 === 0) {
    message = "Even number";
} else if (user % 1 === 0) {
    message = "Odd number";
}
alert(message);
