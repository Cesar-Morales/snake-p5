let valueX = 0;
let valueY = 0;
let directionX = 0;
let directionY = 0;
let cubeSize = 40;
let speedSnake = 2;

//se ejecuta solo una vez
function setup() {
    //widht,height
    createCanvas(800, 800);
}

//se ejecuta siempre
function draw() {
    background(220);
    drawPlayer(valueX, valueY);
    circle(200, 200, cubeSize);
    updatePlayer();
}

function drawPlayer(x,y){
    rect(x, y, cubeSize, cubeSize);
}

function updatePlayer(){
    if(directionX != 0){ 
        if ((valueX > 0) && (valueX < width - cubeSize)){
            valueX = valueX + directionX;
        } 
    }
    if (directionY != 0){
        if ((valueY > 0)&&(valueY < height - cubeSize)){
            valueY = valueY + directionY;
            directionX = 0;
        }
    }
}


function keyPressed(){
    switch(keyCode){
        case LEFT_ARROW:
            if (valueX > 0) {
                valueX -= speedSnake;
                directionX = -speedSnake;
                directionY = 0;
            }
            break;
        case RIGHT_ARROW:
            if (valueX < width - cubeSize) {
                valueX += speedSnake;
                directionX = speedSnake;
                directionY = 0;
            }
            break;
        case UP_ARROW:
            if (valueY > 0) {
                valueY -= speedSnake;
                directionY = -speedSnake;
                directionX = 0;
            }
            break;
        case DOWN_ARROW:
            if (valueY < height - cubeSize) {
                valueY += speedSnake;
                directionY = speedSnake;
                directionX = 0;
            }
            break;
    }
}