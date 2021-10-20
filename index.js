let bordersSnake = {"xTop":0,"xBottom":0,"yLeft":0,"yRight":0}
let direction = {"x": 0, "y":0};
let squareSize = 40;
let speedSnake = 1;
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
    drawPlayer(snakePos,bordersSnake);
    circle(circlePos.x, circlePos.y, squareSize/2);
    updatePlayer();
    collision();
}

function randomXY(){
    x = Math.floor(Math.random() * ((width - squareSize) - 0)) + 0;
    y = Math.floor(Math.random() * ((width - squareSize) - 0)) + 0;
    return {"x" : x, "y" : y}
}

function collision(){
    if (circlePos.x == snakePos.x){
        if (circlePos.y <= snakePos.y && circlePos.y <= snakePos.y + squareSize){
            alert("tocado")
        }
    }
}

function drawPlayer(coor){
    rect(coor.x, coor.y, squareSize, squareSize);
}

function updatePlayer(){
    if(direction.x){ 
        if ((snakePos.x > 0) && (snakePos.x < width - squareSize)){
            snakePos.x = snakePos.x + direction.x;
        } 
    }
    if (direction.y){
        if ((snakePos.y > 0)&&(snakePos.y < height - squareSize)){
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
            if (snakePos.x < width - squareSize) {
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
            if (snakePos.y < height - squareSize) {
                snakePos.y += speedSnake;
                direction.y = speedSnake;
                direction.x = 0;
            }
            break;
    }
}