document.addEventListener("DOMContentLoaded", function () {
    var values = [.20, .30, .15, .18, .17]; //NOTE THAT THESE ADD UP TO 1.0
    var canvas = document.getElementById("c");
    var context = canvas.getContext("2d");
    var cx = canvas.width / 2;
    var cy = canvas.height / 2;
    var radius = 100;
    //start at zero degrees (or zero Radians)
    var currentAngle = 0;

    for (var i = 0; i < values.length; i++) {
        var colour = setColour(values[i]);
        //DRAW THE ARCS
        //context.strokeStyle = "#0CF";
        //context.lineWidth = 1;
        //uncomment the above if using stroke() too
        var endAngle = currentAngle + (values[i] * (Math.PI * 2)); //CALCULATE PERCENTAGE OF CIRCLE IN RADIANS
        context.moveTo(cx, cy); //move to middle of the circle
        //context.fillStyle = colour;
        context.beginPath();
        context.fillStyle = colour;
        radius = 300 * values[i];
        context.arc(cx, cy, radius, currentAngle, endAngle, false);
        context.lineTo(cx, cy);
        context.fill();
        context.closePath();
        //UPDATE THE CURRENT ANGLE TO BE READY FOR THE NEXT SEGMENT
        currentAngle = endAngle;
    }
});

function setColour(val) {
    //SET THE COLOURS
    var intColour = parseInt(val * 16777215); //PERCENTAGE OF FULL 24-bit 
    console.log(intColour);
    var red = ((intColour >> 16) & 255);
    red = red.toString(16); //convert the decimal number to HEX
    if (red.length == 1) red = "0" + red;
    var green = ((intColour >> 8) & 255);
    green = green.toString(16);
    if (green.length == 1) green = "0" + green;
    var blue = (intColour & 255);
    blue = blue.toString(16);
    if (blue.length == 1) blue = "0" + blue;
    console.log(red, green, blue);
    //var colour = "rgb(" + red +"," + green+"," + blue+")";
    var colour = "#" + red + green + blue;
    //An alternative would be to use rgb(red, green, blue)
    return colour;
}