function setup() {
    createCanvas(550, 550);
    background(51);

}

let xPos = 30;
let yPos =  30;
let xDirection = 20;
let yDirection = 20;
function draw() {
    background(51);    
    fill(255); // Set fill to white
    ellipse(xPos, yPos, 80, 80); // Draw white ellipse using RADIUS mode
    xPos = xPos + xDirection; // Adds +5 and makes it move
    yPos = yPos + yDirection;
    if (xPos > 540){
        xDirection = (random(1)*40) * -1;
    }
    else if (xPos < 0) {
        xDirection = (random(1)*40) * 1;
    }
    if (yPos > 540){
        yDirection = (random(1)*40) * -1;
    }
    else if (yPos < 0) {
        yDirection = (random(1)*40) * 1;
    }

}
