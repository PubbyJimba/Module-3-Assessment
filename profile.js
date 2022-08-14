function alertColor() {
    alert("My favorite color is green.")
}

function alertPlace() {
    alert("My favorite place is Puerto Vallarta, Mexico.")
}

function alertRitual() {
    alert("My favorite ritual is sleeping with a weighted blanket.")
}

const buttonColor = document.querySelector('#color');
const buttonPlace = document.querySelector('#place');
const buttonRitual = document.querySelector('#ritual');

buttonColor.addEventListener("click", alertColor);
buttonPlace.addEventListener("click", alertPlace);
buttonRitual.addEventListener("click", alertRitual);