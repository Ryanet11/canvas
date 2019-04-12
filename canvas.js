var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth-30;
canvas.height = window.innerHeight-30;
mouseRadius = 50;
var mouse = {
	x: undefined,
	y: undefined
}
var maxRadius = 40;
window.addEventListener("mousemove", function(event) {
	mouse.x = event.x;
	mouse.y = event.y;
});
function Circle(x, y) {
	this.x = x;
	this.y = y;
	this.dx = (Math.random()-0.5) *5;
	this.dy = (Math.random()-0.5) *5;
	this.radius = (Math.floor(Math.random()*5))+5;
	this.firstRadius = this.radius;
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
		if (mouse.x - this.x > -mouseRadius && mouse.x - this.x < mouseRadius) {
			if (mouse.y - this.y > -mouseRadius && mouse.y - this.y < mouseRadius && this.radius < maxRadius) {
				this.radius += 2;
			}
			else if(this.radius > this.firstRadius) {
				this.radius -= 2;
			}
		}
		else if(this.radius > this.firstRadius) {
			this.radius -= 2;
		} 
	}
}
var radius = 30;
var x = 0;
var y = 0;
var colors = ["black","red","gray"]
var circles = [];
//var circle = new Circle(250, 250);
for (var i=0;i<300;i++) {
	var x = Math.random()*(canvas.width - radius * 2) + radius;
	var y = Math.random()*(canvas.height - radius * 2) + radius;
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