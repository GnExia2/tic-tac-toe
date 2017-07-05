console.log("js is loaded")

//sets variables needed
var painted;
var content;
var winningCombinations;
var turn = 0;
var theCanvas;
var c;
var cxt;
var squaresFilled = 0;
var w;
var y;

//Instanciate Arrays loads entire gameboard and sets winningCombinations
window.onload=function(){
    painted = new Array();
    content = new Array();
    winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(var l = 0; l <= 8; l++){
    painted[l] = false;
    content[l]='';
    }
}

//Game methods
function canvasClicked(canvasNumber){
    theCanvas = "canvas"+canvasNumber;
    c = document.getElementById(theCanvas);
    cxt = c.getContext("2d");
    if(painted[canvasNumber-1] ==false){
        if(turn%2==0){
            cxt.beginPath(); //creates X
            cxt.moveTo(20,20);
            cxt.lineTo(80,80);
            cxt.moveTo(80,20);
            cxt.lineTo(20,80);
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber-1] = 'X';
        }
          else{
            cxt.beginPath();
            cxt.arc(50,50,40,0,Math.PI*2,true); //creates circle within block
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber-1] = 'O';
          }
        turn++;
        painted[canvasNumber-1] = true;
        squaresFilled++;
        checkForWinners(content[canvasNumber-1]);

        if(squaresFilled==9){
            alert("It's a tie!");
            location.reload(true);
        }
    }
      else{
        prompt("THAT SPACE IS ALREADY OCCUPIED");
      }
}
function checkForWinners(symbol){ //checkForWinners
    for(var a = 0; a < winningCombinations.length; a++){
      if (content[winningCombinations[a][0]] == symbol && content[winningCombinations[a][1]] == symbol && content[winningCombinations[a][2]] == symbol){
        alert(symbol+ " WON!"); // either X or Y + "WON!"
        playAgain();
      }
    }
}
function playAgain(){ //would you like to play again?
    y=confirm("PLAY AGAIN?");
    if(y==true){
        location.reload(true);
    }
    else{
        alert("Till Next Time!");
    }
}

function myFunction() {
  document.getElementById("reset").reset();
}
