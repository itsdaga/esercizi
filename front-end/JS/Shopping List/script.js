var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelector("ul");


//crea li 
function createListElement() {
  var li = document.createElement("li");
  var span = document.createElement("span");

  span.appendChild(document.createTextNode("X "));
  span.classList.add("deleteBtn");

  li.appendChild(document.createTextNode(input.value));
  li.classList.add("listElement");

  
 
  ul.appendChild(li);
  


  input.value = "";
}

function taskDoneUndon(){
    listElements.toggleClass("done");
}

list.addEventListener("click", function(e){

    if (e.target.tagName === "LI"){
        e.target.classList.toggle("done");
    }

})


//funzioni di input delle lista 

button.addEventListener("click", function () {
  createListElement();
});

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    createListElement();
  }
});
