var canvas = document.getElementById('canvas');
var run = true;
var obstacleX = 0;
var obstacleY = 0;
var playerX = 0;
var playerY = 0;
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	//window
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.fillRect(50, 50, 125, 125);
	ctx.clearRect(63, 63, 100, 100);
	//coloring the window
	ctx.fillStyle = "rgb(243, 101, 35)";
	ctx.fillRect(63, 63, 45, 45);
	ctx.fillStyle = "rgb(141, 199, 64)";
	ctx.fillRect(118, 63, 45, 45);
	ctx.fillStyle = "rgb(0, 174, 240)";
	ctx.fillRect(63, 118, 45, 45);
	ctx.fillStyle = "rgb(255, 194, 15)";
	ctx.fillRect(118, 118, 45, 45);
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.fillRect(63, 108, 100, 10);
	ctx.fillRect(108, 63, 10, 100);
	//lines surrounding window
	ctx.beginPath();
	ctx.moveTo(25,25);
	ctx.lineTo(200,25);
	ctx.lineTo(200,200);
	ctx.lineTo(25,200);
	ctx.lineTo(25, 25);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.stroke();
}