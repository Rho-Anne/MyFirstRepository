document.getElementById("num").innerHTML = 12345;
document.getElementById("deci").innerHTML = 12.345;

document.getElementById("single").innerHTML = 'This is a string in single quotes.';
document.getElementById("double").innerHTML = "This is a string in double quotes.";

let greeting = "Hello, Wellcome!";
const pi =67;
var isActive = true;

document.getElementById("vlet").innerHTML = greeting;
document.getElementById("vconst").innerHTML = pi;
document.getElementById("vvar").innerHTML = isActive;

let a = 20;
const b = 3.14;
var c = 67;

document.getElementById("a").innerHTML = a;
document.getElementById("b").innerHTML = b;
document.getElementById("c").innerHTML = c;

function changeValues() {
    a = "67";
   
    c = "18";

    document.getElementById("a").innerHTML = a;
   
    document.getElementById("c").innerHTML = c;
}
