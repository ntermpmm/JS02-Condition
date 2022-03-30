// let user = prompt("user");
// if (user !== "codecamp") {
//     alert("guest");
//     alert("welcome guest");
// } else {
//     pass = prompt("password");
//     if (pass !== "123456") {
//         alert("Wrong password");
//     } else {
//         alert("codecamp");
//         alert("welcome codecamp");
//     }
// }

let user = prompt("Enter username") || "Guest";
if (user === "codecamp") {
    let password = prompt("Enter password");
    if (password !== "123456") {
        alert("Wrong Password");
    }
} else {
    user = "guest";
}

alert(user);
