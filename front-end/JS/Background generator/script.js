var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var body = document.getElementsByTagName('body')[0];
var css = document.getElementsByClassName('css')[0];
var button = document.querySelector('#randomizer');


function getColorString() {

    var letters = '0123456789ABCDEF';

    var color1Random = "#";
    var color2Random = "#";



    for (var i = 0; i < 6; i++) {
        color1Random += letters[Math.floor(Math.random() * 16)];
        color2Random += letters[Math.floor(Math.random() * 16)];

    }

    color1.value = color1Random;
    color2.value = color2Random;

    setGradient()


}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";


    css.textContent = body.style.background + ";";
}



color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

button.addEventListener('click', getColorString);


