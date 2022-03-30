// let user = prompt("your user");
// if (user == "" && null) {
//     alert("username is required");
// } else if (user == "admin") {
//     alert("Hello");
// }
// let pass = prompt("your pass");

// if (user == "" || null) {
//     alert("password is required");
// } else if (pass == "1234" && "qwerty") {
//     alert("Hello");
// } else {
//     alert("invalid username or password");
// }

// const username = prompt("Enter username");

// if (username === null || username.trim() === "") {
//     alert("username is required");
// } else {
//     const password = prompt("Enter password");
//     if (password === null || password.trim() === "") {
//         alert("password is required");
//     } else {
//         if (username === "admin" && password === "1234") {
//             alert(`Hello ${username}`);
//         } else if (username === "john" && password === "qwerty") {
//             alert(`Hello ${username}`);
//         } else {
//             alert("invalid username or password");
//         }
//     }
// }

function isValidInput(value) {
    return !(value === null || value.trim() === "");
}

const username = prompt("Enter username");

if (!isValidInput(username)) {
    alert("username is required");
} else {
    const password = prompt("Enter password");
    if (!isValidInput(password)) {
        alert("password is required");
    } else {
        if (username === "admin" && password === "1234") {
            alert(`Hello ${username}`);
        } else if (username === "john" && password === "qwerty") {
            alert(`Hello ${username}`);
        } else {
            alert("invalid username or password");
        }
    }
}
