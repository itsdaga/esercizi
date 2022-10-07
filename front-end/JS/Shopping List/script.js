var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelector("ul");

function createListElement() {
  var li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value));
  li.classList.add("listElement");

  ul.appendChild(li);

  input.value = "";
}

function taskDoneUndon(){
    listElements.toggleClass("done");
}

list.addEventListener("click", function(e){

    console.log(e.target.tagName);

    if (e.target.tagName === "LI"){
        e.target.classList.toggle("done");
    }

})

button.addEventListener("click", function () {
  createListElement();
});

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    createListElement();
  }
});
