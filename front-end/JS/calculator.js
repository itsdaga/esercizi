// simple js calculator

var a = Number(prompt('Inserici il primo numero'));
var b = Number(prompt('Inserici il primo secondo'));
var c = 0;

var toDo = prompt('Inserici l\'operazione da eseguire');

switch (toDo) {

    case "+":
        c = a + b;
        break;
    case "-":
        c = a - b;
        break;
    case "/":
         c = a / b;
        break;
    case "*":
         c = a * b;
        break;

}

alert(c)