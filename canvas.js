var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var x = 200;
var y = 200;
var xVel = 6;
var yVel = 3;
var radius = 30;
canvas.width = window.innerWidth-30;
canvas.height = window.innerHeight-30;
function animated() {
	requestAnimationFrame(animated);
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.beginPath();
	ctx.arc(x, y, 30,0,Math.PI*2, true);
	ctx.strokeStyle = "purple";
	ctx.stroke();
	ctx.fillStyle = "purple";
	ctx.fill();
	checkBoundaries();
	x+=xVel;
	y+=yVel
}
function checkBoundaries(){
	if (x + radius + xVel > canvas.width) {
		xVel *= -1;
	}
	if (x - radius + xVel < 0) {
		xVel *= -1;
	}
	if (y + radius + yVel > canvas.height) {
		yVel *= -1;
	}
	if (y - radius + yVel < 0) {
		yVel *= -1;
	}
}
if (canvas.getContext) {
	animated();
}