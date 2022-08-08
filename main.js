canvas= document.getElementById("myCanvas");
colour="blue";
ctx= canvas.getContext("2d");
ctx.strokeStyle = colour;
ctx.lineWidth=2;
ctx.arc(200, 200, 40, 0, 2 *Math.PI);
ctx.stroke();