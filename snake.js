const convas = document.getElementById( "canvas" );
const context = canvas.getContext( '2d' );




// snake array of object.
let snake = [ { x: 20, y: 20 } ];  
// apple array of object.
let apple = { x: 20, y: 20 };
 //axis array of object for snake.
let axis = [ { x: 0, y: 0 } ]; 
 //axis array of object for Apple.
let appleAxis = { x: 0, y: 0 };
//variable declaration ad intilization.
let code = 0, prevCode = 0 , newCode = 0, intId= 0, score = 0, topScore = 0;

//snake head on rest state.
context.fillRect( axis.x, axis.y, snake.x, snake.y ); //on rest state showing snkae head.
//start interval on the time of pageLoad.
intId = setInterval( continuoulyMove, 150 );
//calling apple funciton.
RandomApple();





//move snake function.
function movesnake(){
    //clear rect 500 is canvas height and width 
    context.clearRect(0 ,0 , 500, 500); 
    //background for canvas.
    context.fillStyle = "white";
    context.fillRect( 0, 0, canvas.width, canvas.height ); 
    //drawing apple on canvas.
    context.fillStyle = "rgb( 231, 76, 60  )";
    context.fillRect( appleAxis.x, appleAxis.y, apple.x, apple.y );
    //drawing snake head on canvas.
    context.fillStyle = "rgb( 88, 214, 141 )";
    context.fillRect(  axis[ 0 ].x, axis[ 0  ].y, snake[ 0 ].x, snake[ 0 ].y ); 
    //drawing snake body on canvas.
    context.fillStyle = "rgb( 169, 223, 191 )"; 
    for( let i = 1; i < snake.length; i++ ){
        context.fillRect( axis[ i ].x, axis[ i  ].y, snake[ i ].x, snake[ i ].y ); //drawing snake at new position.
    }
}




//random Apple function.
function RandomApple(){
    //caluculating Apple x and y axis.
    appleAxis.x = Math.floor(( Math.random() * 480 ) / 20);
    appleAxis.y = Math.round(( Math.random() * 480 ) / 20 );
    appleAxis.x = appleAxis.x * 20;
    appleAxis.y = appleAxis.y * 20;
}





//when key press acting according to it.
window.onkeydown = function ( event ) {
    //condition to act on only when W, A, S and D key pressed
    if( event.keyCode == 65 || event.keyCode == 68 || event.keyCode == 87 || event.keyCode == 83 )
    //add key code to new Code Variable.
    newCode = event.keyCode;
    //condtion to not move in opposite direction.
    if( newCode == 65 && prevCode == 68 ) prevCode = 65;
    else if( newCode == 68 && prevCode == 65 ) prevCode = 68;
    else if( newCode == 83 && prevCode == 87 )  prevCode = 83;
    else if(newCode == 87 && prevCode == 83) newCode = 83;

    if( prevCode != newCode )
        code = event.keyCode;
}





function continuoulyMove(){
    //for loop for snake lenght to 0.
    for( let i = snake.length - 1; i >= 0 ; i-- ){
        if( i == 0 ){
            if( code == 83 ){
                //canvas height - snake intial height.
                if( axis[ i ].y < canvas.height - snake[i].y )  
                    axis[ i ].y += snake[ i ].y;
            }
            else if( code == 68 ){
                 //canvas width - snake intial width.
                if( axis[ i ].x < canvas.width - snake[i].x )    
                    axis[ i ].x += snake[ i ].x;
            }
            else if( code == 65 ){
                //canvas intitial width. 
                if( axis[ i ].x > 0)        
                    axis[ i ].x -= snake[ i ].x;
            }
            else if( code == 87 ){
                 //canvas intitial height.
                if( axis[ i ].y >  0)      
                    axis[ i ].y -= snake[ i ].y;
            }
            //condtion for if apple is collide with snake head.
            if( axis[ 0 ].x == appleAxis.x && axis[ 0 ].y == appleAxis.y ) 
                EatApple();
            //condition for if snake collide with its body.
            for( let j = 1;  j < snake.length; j++ ){
                if( axis[ 0 ].x == axis[ j ].x && axis[ 0 ].y == axis[ j ].y ){
                    gameOver();
                }
            }
        }
        else{
            //movind snake body to follow snake head.
            snake[ i ].x = snake[ i - 1 ].x;
            snake[ i ].y = snake[ i - 1 ].y;
            axis[ i ].x = axis[ i - 1 ].x;
            axis[ i ].y = axis[ i - 1 ].y;
        }
        //adding value to snake code.
        prevCode = code;
    }
    //calling move snake function.
    movesnake();
}





// eat snake function.
function EatApple(){
    //pushing values
    snake.push( {} );
    axis.push( {} );
    //calling random apple function to generate apple in random posiition.
    RandomApple();
    //checking apple not hide behind snake.
    for(let i = 0; i < snake.length; i++)
        if( appleAxis.x == axis[i].x && appleAxis.y == axis[i].y)
            RandomApple();
    //scoreing the score of user.
    score++;
    //showing score on borwser.
    document.getElementById( "score" ).innerHTML = "<h2>Score: " + score + " </h2>";
}




//game over function.
function gameOver(){
    //clearing interval.
    clearInterval( intId );
    document.getElementById( "gameOver" ).innerHTML = "<h2>Game Over</h2>";
    //calculating high score:
    score > localStorage.getItem( "topScore" ) ? topScore = score : topScore = localStorage.getItem( "topScore" );
    //adding highScore to local Storage
    localStorage.setItem("topScore", topScore);
    highScore();
}





//page reload function.
function restart(){
    location.reload();
}

//highScore function.
function highScore(){
    localStorage.getItem( "topScore" ) != null ? document.getElementById( "highScore" ).innerHTML = "<h2>High Score: " + localStorage.getItem( "topScore" ) + " </h2>" : document.getElementById( "highScore" ).innerHTML = "<h2>High Score: 0</h2>";
}

//calliing highScore.
highScore();