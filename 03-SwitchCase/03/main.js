// let browser = prompt("Your Brow bro?");
// if (browser == "Edge") {
//     alert("You've got the Edge!");
// } else if (browser !== "Chrome" && "Firefox" && "Safari" && "Opera") {
//     alert("We hope that this page looks ok!");
// } else {
//     alert("Okay we support these browsers too");
// }

let browser = prompt("Your Brow bro?");
if (browser === "Edge") {
    alert("You've got the Edge!");
} else if (
    browser === "Chrome" ||
    browser === "Firefox" ||
    browser === "Safari" ||
    browser === "Opera"
) {
    alert("Okay we support these browsers too");
} else {
    alert("We hope that this page looks ok!");
}
