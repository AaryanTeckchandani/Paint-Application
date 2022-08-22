canvas= document.getElementById("myLogo");
colour="red";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth=2;
ctx.arc(500, 200, 40, 0, 2 *Math.PI);
ctx.stroke();

colour="black";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth=2;
ctx.arc(300, 200, 40, 0, 2 *Math.PI);
ctx.stroke();

colour="blue";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth=2;
ctx.arc(400, 200, 40, 0, 2 *Math.PI);
ctx.stroke();

colour="yellow";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth=2;
ctx.arc(350, 250, 40, 0, 2 *Math.PI);
ctx.stroke();

colour="green";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth=2;
ctx.arc(450, 250, 40, 0, 2 *Math.PI);
ctx.stroke();