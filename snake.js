const convas = document.getElementById( "canvas" );
const context = canvas.getContext( '2d' );

let snake = [ { x: 20, y: 20 } ];  // snake array of object.
let apple = { x: 20, y: 20 };
let axis = [ { x: 0, y: 0 } ];  //axis array of object for snake.
let appleAxis = { x: 0, y: 0 };
let code = 0;

context.fillRect( axis.x, axis.y, snake.x, snake.y ); //on rest state showing snkae head.

function movesnake(){
    context.clearRect(0 ,0 , 500, 500); //canvas height and width
    context.fillStyle = "black";
    context.fillRect( appleAxis.x, appleAxis.y, apple.x, apple.y ); //drawing snake at new position.
    context.fillStyle = "red"; // color for snake.
    for( let i = 0; i < snake.length; i++ ){
        context.fillRect( axis[ i ].x, axis[ i  ].y, snake[ i ].x, snake[ i ].y ); //drawing snake at new position.
    }
}

function RandomApple(){
    appleAxis.x = Math.floor((Math.random() * 480) / 20);
    appleAxis.y = Math.round(( Math.random() * 480) / 20 );
    appleAxis.x = appleAxis.x * 20;
    appleAxis.y = appleAxis.y * 20;
}

window.onkeydown = function ( event ) {
    code = event.keyCode;
}

function continuoulyMove(){
    for( let i = snake.length - 1; i >= 0 ; i-- ){
        if( i == 0 ){
            if( code == 83){
                if( axis[ i ].y < 480 )   //canvas height - snake intial height.
                    axis[ i ].y += snake[ i ].y;
            }
            else if( code == 68){
                if( axis[ i ].x < 480)     //canvas width - snake intial width.
                    axis[ i ].x += snake[ i ].x;
            }
            else if( code == 65){
                if( axis[ i ].x > 0)        //canvas intitial width. 
                    axis[ i ].x -= snake[ i ].x;
            }
            else if( code == 87){
                if( axis[ i ].y >  0)       //canvas intitial height.
                    axis[ i ].y -= snake[ i ].y;
            }
            if( axis[ 0 ].x == appleAxis.x && axis[ 0 ].y == appleAxis.y){
                snake.push( {} );
                axis.push( {} );
                RandomApple();
            }
        }
        else{
            snake[ i ].x = snake[ i - 1 ].x;
            snake[ i ].y = snake[ i - 1 ].y;
            axis[ i ].x = axis[ i - 1 ].x;
            axis[ i ].y = axis[ i - 1 ].y;
        }
    }
    movesnake();
}
let id = setInterval( continuoulyMove, 150 );
RandomApple();