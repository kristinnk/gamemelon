// Global variables
var fps = 30;
var canvasElement;
var canvas;
var sprite;

function draw() {
	canvas.save();
    canvas.fillStyle = "#000000";
    canvas.fillRect(0, 0, canvasElement.width, canvasElement.height); 

    canvas.drawImage(sprite, 0, 0, 16, 16, 256, 256, 64, 64);
    canvas.drawImage(sprite, 128, 0, 16, 16, 128, 256, 64, 64);
}

function gameLoop() {

	sprite = new Image();
  	sprite.src = "img/gameboyguy2.png"; 

	setTimeout( function() { 
		requestAnimationFrame( gameLoop );
		draw();
		}, 1000 / fps );
	}

window.onload = function() {
	console.log('Starting game.');

	canvasElement = document.getElementById("mainCanvas");
	canvas = canvasElement.getContext("2d");  

    canvas.imageSmoothingEnabled = false;
    canvas.webkitImageSmoothingEnabled = false;
    canvas.mozImageSmoothingEnabled = false;

	gameLoop();
}
