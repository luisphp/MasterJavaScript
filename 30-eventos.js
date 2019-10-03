'use strict'

var button = document.querySelector("#button");

	button.classList.toggle('btn-primary');

function cambioColor(){


	if(button.classList.contains('btn-primary')){
		button.classList.toggle('btn-success');
	}else{
		button.classList.toggle('btn-primary');
	}
	
}

//En lugar de llamar al onClick desde el propio HTML se puede usar el onClickListener

button.addEventListener('click', function(){
	cambioColor();
});


//Mouse over

button.addEventListener('mouseover', function(){
	cambioColor();
});
