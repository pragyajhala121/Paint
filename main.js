var mouseEvent="";
var last_x,last_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=5;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mousemove",my_mouseMove);
function my_mouseMove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last postion of X and Y co-ordinates");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x,last_y);
        console.log("Current position of x and y coordinates = "); 
        console.log("x = " + current_x + "y = " + current_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}
function clearArea() { 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}