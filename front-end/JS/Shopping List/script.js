var button = document.querySelector("#pushButton");
var list = document.querySelector("#list");

button.addEventListener("click", addElement);

function addElement() {

   
    elem = document.createElement("li")
    elem.appendChild(document.createElement("br"));
    elem = document.createTextNode(document.querySelector("input").value)
    list.appendChild(elem);
}
