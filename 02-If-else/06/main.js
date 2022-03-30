// let number1 = +prompt("input you num");
// let number2 = +prompt("input");
// let message = "";

// if (number1 === Number(number1) && number2 === Number(number2)) {
//     message = alert(number1 + number2);
// } else {
//     message = alert("Invalid number");
// }

function isInvalidNumber(checkValue) {
    if (checkValue === null) {
        return false;
    } else if (checkValue.trim() === "") {
        return false;
    } else if (isNaN(checkValue)) {
        return false;
    } else {
        return true;
    }
    // return !(
    //     checkValue === null || checkValue.trim() === "" || checkValue(input1)
    // );
}

let input1 = +prompt("Enter num1");
let input2 = +prompt("Enter num2");
