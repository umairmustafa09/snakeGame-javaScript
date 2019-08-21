const convas = document.getElementById( "canvas" );
const context = canvas.getContext( '2d' );

let snake = { x: 20, y: 20 };
let apple = { x: 20, y: 20 };
let direction = { x: 0, y: 0 };
let code = 0;

context.fillRect( direction.x, direction.y, snake.x, snake.y );

function movesnake(){
    context.clearRect(0 ,0 , 500, 500); //canvas height and width
    context.fillStyle = "red";
    context.fillRect( direction.x, direction.y, snake.x, snake.y ); //drawing snake at new position.
    context.fillStyle = "black";
    context.fillRect( apple.x, apple.y, apple.x, apple.y ); //drawing snake at new position.
}

window.onkeydown = function ( event ) {
    code = event.keyCode;
}

function continuoulyMove(){
    if( code == 83 ){
        if( direction.y < 480 )   //canvas height - snake intial height.
            direction.y += snake.y;
    }
    else if( code == 68 ){
        if( direction.x < 480)     //canvas width - snake intial width.
            direction.x += snake.x;
    }
    else if( code == 65 ){
        if( direction.x > 0)        //canvas intitial width. 
            direction.x -= snake.x;
    }
    else if( code == 87 ){
        if( direction.y >  0)       //canvas intitial height.
            direction.y -= snake.y;
    }
    movesnake();
}

setInterval( continuoulyMove, 150 );