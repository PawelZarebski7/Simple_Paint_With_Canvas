var canvas = document.getElementById("c1");
var ctx = canvas.getContext('2d');
var myColor = 'black';

document.getElementById('color').oninput = function(){
	myColor = this.value;
}

canvas.onmousedown = function(event){
	canvas.onmousemove = function(event){
		var x = event.offsetX;
		var y = event.offsetY;
		ctx.fillRect(x-5,y-5,5,5);
		ctx.fillStyle = myColor;
		ctx.fill();
	}
	
	canvas.onmouseup = function(){
		canvas.onmousemove = null;
	}
}