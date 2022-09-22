'use strict';

const hamburger = document.querySelector('button.hamburger');
const ul = document.querySelector('ul');
hamburger.addEventListener('click', function() {
	hamburger.classList.toggle('is-active');

	if (ul.style.height){
		ul.style.height = null;
	  } else {
		ul.style.height = document.querySelector('nav').offsetHeight + 'px';
		
	  } 
});