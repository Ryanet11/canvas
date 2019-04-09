var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth-30;
canvas.height = window.innerHeight-30;
function Circle(x, y) {
	this.x = x;
	this.y = y;
	this.dx = (Math.random()-0.5) *9;
	this.dy = (Math.random()-0.5) *9;
	this.radius = radius;
	this.color = colors[Math.floor(Math.random()*colors.length)];
	this.draw = function() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius,0,Math.PI*2, true);
		ctx.strokeStyle = this.color;
		ctx.stroke();
		ctx.fillStyle = this.color;
		ctx.fill();
	}
	this.update = function() {
		if (this.x + this.radius + this.dx > canvas.width) {
			this.dx *= -1;
		}
		if (this.x - this.radius + this.dx < 0) {
			this.dx *= -1;
		}
		if (this.y + this.radius + this.dy > canvas.height) {
			this.dy *= -1;
		}
		if (this.y - this.radius + this.dy < 0) {
			this.dy *= -1;
		}
		this.x+=this.dx;
		this.y+=this.dy;
		this.draw();
	}
}
var radius = 30;
var x = Math.random()*(canvas.width - radius * 2) + radius;
var y = Math.random()*(canvas.height - radius * 2) + radius;
var colors = ["rgba(0,255,153,0.7)","rgba(255,0,255,0.7)","rgba(177,255,0,0.7)","rgba(255,175,0,0.7)","rgba(0,210,255,0.7)"]
var circles = [];
//var circle = new Circle(250, 250);
for (var i=0;i<10;i++) {

	circles.push(new Circle(x, y));
}
console.log(circles)
function animated() {
	requestAnimationFrame(animated);
	ctx.clearRect(0,0,canvas.width,canvas.height);
	for (var i = 0;i < circles.length;i++) {
		circles[i].update();
	}
}
if (canvas.getContext) {
	animated();
}