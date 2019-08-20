//declaring and initalizing variables.
let moveUp = 0, moveDown = 0, moveRight = 0, moveLeft = 0, code = 0;
//declaring and initalizing variables.
let snakeHeight = 20; snakeWidth = 20 , boxHieght = 500, boxWidth = 500;
//declaring and initalizing variables.
let intervalUp = "", intervalDown = "", intervalRight = "", intervalLeft = "";
//declaring and initalizing variables.
let move = document.getElementById( "snake" );

//idetifying which key is pressed and act according to it.
document.onkeydown = function( event ){   
    //conditon for preventing double interval.
    if( code != event.keyCode ){
        code = event.keyCode;        
        //when w, a, s or d clicked then clear intervals otherwise not.
        if( event.keyCode == 87 || event.keyCode == 83 || event.keyCode == 65 || event.keyCode == 68 ){
            //clearing intervals.
            clearInterval( intervalDown );
            clearInterval( intervalUp );
            clearInterval( intervalRight );
            clearInterval( intervalLeft );
        }
        if(event.keyCode == 87){
            //moveUp
            intervalUp =  setInterval( up, 5 );
        }
        else if( event.keyCode == 83 ){
            //moveDown
            intervalDown = setInterval(down, 5);
        }
        else if( event.keyCode == 68 ){
            //moveRight
            intervalLeft = setInterval(left, 5);
        }
        else if( event.keyCode == 65 ){
           //moveLeft
           intervalRight =  setInterval(right, 5);
        }
    }
}

function up(){
    if( moveUp > -snakeHeight ){ //to go above box line.
        moveUp--;
        moveDown = moveUp;
        move.style.top = moveUp + "px";
    }
    else{
        moveUp = boxHieght;
    }
}
function down(){
    if( moveDown < boxHieght ){  //box.width.
        moveDown++;
        moveUp = moveDown;
        move.style.top = moveDown + "px";
    }
    else{
        moveDown = -snakeHeight;
    }
}

function right(){
    if( moveRight > -snakeWidth ){  //to go above box line.
        moveRight--;
        moveLeft = moveRight;
        move.style.left = moveRight + "px";
    }
    else{
        moveRight = boxWidth;
    }
}
function left(){
    if( moveLeft < boxWidth ){  //box.width.
        moveLeft++;
        moveRight = moveLeft;
        move.style.left = moveLeft + "px";
    }
    else{
        moveLeft = -snakeWidth;
    }
}