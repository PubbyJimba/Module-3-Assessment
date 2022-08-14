console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert("Form successfully submitted.")
}

function handleMousover(evt) {
	evt.preventDefault();

	alert("You're really smart!")
}


let form = document.querySelector('#contact');
let ducky = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
ducky.addEventListener('mouseover', handleMousover);