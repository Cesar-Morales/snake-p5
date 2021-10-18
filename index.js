let direction = {"x": 0, "y":0};
let circleSize = 40;
let speedSnake = 4;
let circlePos;
let snakePos;

//se ejecuta solo una vez
function setup() {
    //widht,height
    createCanvas(800, 800);
    circlePos = randomXY();
    snakePos = randomXY();
}

//se ejecuta siempre
function draw() {
    background(0);
    drawPlayer(snakePos);
    circle(circlePos.x, circlePos.y, circleSize/2);
    updatePlayer();
}

function randomXY(){
    x = Math.floor(Math.random() * ((width - circleSize) - 0)) + 0;
    y = Math.floor(Math.random() * ((width - circleSize) - 0)) + 0;
    return {"x" : x, "y" : y}
}

function drawPlayer(coor){
    rect(coor.x, coor.y, circleSize, circleSize);
}

function updatePlayer(){
    if(direction.x != 0){ 
        if ((snakePos.x > 0) && (snakePos.x < width - circleSize)){
            snakePos.x = snakePos.x + direction.x;
        } 
    }
    if (direction.y != 0){
        if ((snakePos.y > 0)&&(snakePos.y < height - circleSize)){
            snakePos.y = snakePos.y + direction.y;
            direction.x = 0;
        }
    }
}


function keyPressed(){
    switch(keyCode){
        case LEFT_ARROW:
            if (snakePos.x > 0) {
                snakePos.x -= speedSnake;
                direction.x = -speedSnake;
                direction.y = 0;
            }
            break;
        case RIGHT_ARROW:
            if (snakePos.x < width - circleSize) {
                snakePos.x += speedSnake;
                direction.x = speedSnake;
                direction.y = 0;
            }
            break;
        case UP_ARROW:
            if (snakePos.y > 0) {
                snakePos.y -= speedSnake;
                direction.y = -speedSnake;
                direction.x = 0;
            }
            break;
        case DOWN_ARROW:
            if (snakePos.y < height - circleSize) {
                snakePos.y += speedSnake;
                direction.y = speedSnake;
                direction.x = 0;
            }
            break;
    }
}