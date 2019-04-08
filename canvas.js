var canvas = document.getElementById('canvas');
var run = true;
var obstacleX = 0;
var obstacleY = 0;
var playerX = 0;
var playerY = 0;
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	ctx.an
	ctx.fillStyle = "red";
	ctx.fillRect(117, 120, 10, 80);
	ctx.fillRect(213, 120, 10, 80);
	ctx.fillRect(117, 216, 10, 80);
	ctx.fillRect(213, 216, 10, 80);	
	ctx.fillRect(130, 107, 80, 10);
	ctx.fillRect(130, 203, 80, 10);
	ctx.fillRect(130, 299, 80, 10);
	ctx.beginPath();
	ctx.moveTo(80, 200);
	ctx.lineTo(50, 400);
	ctx.stroke();
}