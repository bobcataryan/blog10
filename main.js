var mouse_event = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
radius = "1";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
color= document.getElementById("color_input").value;
width= document.getElementById("radius_input").value;
mouse_event = "mouseDown";
console.log(mouse_event)
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY - canvas.offsetTop;
    if(mouse_event=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth = width;
        console.log("current position X and Y coordinates are");
        console.log("x = " + current_position_of_mouse_x + " y = " + current_position_of_mouse_y);
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2 * Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouse_event = "mouseleave";
}
function clearbutton(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}