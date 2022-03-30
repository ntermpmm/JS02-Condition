let GPA = +prompt("num");
if (GPA > 79) {
    alert("A");
} else if (GPA > 70) {
    alert("B");
} else if (GPA > 60) {
    alert("C");
} else if (GPA > 49) {
    alert("D");
} else if (GPA >= 0) {
    alert("F");
} else {
    alert("Invalid sore");
}
