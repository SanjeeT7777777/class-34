var Tball;
var database , position ;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    Tball = createSprite(250,250,10,10);
    Tball.shapeColor = "red";
     
     var ballPosition = database.ref('ball/position');
     ballPosition.on('value', readPostion , showErr);
}

function draw(){
    background("white");
    if(position!==undefined){
  
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readPostion(data){
    position = data.val();
    Tball.x = position.x;
    Tball.y = position.y;
}
function writePosition (x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}
function showErr () {
    console.log("show the error");
}
