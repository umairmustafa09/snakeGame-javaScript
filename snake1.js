const convas = document.getElementById( "canvas" );
const context = canvas.getContext( '2d' );

context.fillStyle = "red";

let size = { x: 20, y: 20 };
let direction = { x: 0, y: 0 };

context.fillRect( 20, direction.y, size.x, size.y );

function moveSnake(){
    context.clearRect(0 ,0 , 500, 500);
    context.fillRect( direction.x, direction.y, size.x, size.y );
}

window.onkeydown = function ( event ) {
    if( event.keyCode == 83 ){
        direction.y += size.y;
    }
    else if( event.keyCode == 68 ){
        direction.x += size.x;
    }
    else if( event.keyCode == 65 ){
        direction.x -= size.x;
    }
    else if( event.keyCode == 87 ){
        direction.y -= size.y;
    }
    moveSnake();
}
