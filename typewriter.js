"use strict";

let iterator;
let maxLength;
let sentence = document.querySelector(".typewritten").innerHTML;

console.log(document.querySelector(".typewritten").innerHTML);

function init() {
	maxLength = document.querySelector(".typewritten").innerHTML.length;
	iterator = 0;
	document.querySelector(".typewritten").innerHTML = "";

	loop();
}

function loop() {
	iterator++;

	if (iterator < maxLength) {
		console.log(sentence[iterator - 1]);

		document.querySelector(".typewritten").innerHTML += sentence[iterator - 1];

		setTimeout(loop, 300);
	}
}

init();
