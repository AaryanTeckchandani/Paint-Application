var mouseEvent = "empty";

var lastPositionOfX, lastPositionOfY
canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
colour="blue";
widthOfLine = 5;

var width = screen.width;
newWidth = width - 70;
newHeight = screen.height - 300;
if(width <992){
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height= newHeight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        mouseEvent = "mousedown";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        currentPositionOfMouseX=e.clientX-canvas.offsetLeft;
        currentPositionOfMouseY=e.clientY-canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
            ctx.beginPath();
            ctx.strokeStyle = colour;
            ctx.lineWidth = widthOfLine;

            console.log("Last position of x and y coordinates= ");
            console.log("x = " + lastPositionOfX + "y = ") + lastPositionOfMouseY;
            ctx.moveTo(lastPositionOfX, lastPositionOfY);

            console.log("Current position of x and y coordinates= ");
            console.log("x = " + currentPositionOfX + "y = ") + currentPositionOfMouseY;
            ctx.moveTo(currentPositionOfX, currentPositionOfY);
            ctx.stroke();
        }

        lastPositionOfX=currentPositionOfMouseX
        lastPositionOfY=currentPositionOfMouseY


        }
        
    
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{

    console.log("my touchstart function");
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft ;
    lastPositionOfY = e.touches[0]. clientY - canvas.offsetTop ;
    
    console.log("x = " +lastPositionOfX + ", Y = '"+lastPositionOfY);
    
}

canvas.addEventListener("touchmove", myTouchMove);
function myTouchMove(e){
    console.log("myTouchMove function");
    currentPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = widthOfLine;

    ctx.moveTo(lastPositionOfX, lastPositionOfY);
    ctx.lineTo(currentPositionOfX, currentPositionOfY);
    ctx.stroke();
    lastPositionOfX=currentPositionOfX;
    lastPositionOfY=currentPositionOfY;
}
