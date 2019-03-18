$(function(){




    
    Awake();
});


var boardSize = 4;
var boardArr = [
    [], 
    [], 
    [], 
    []
];


function Awake(){
    for(var i=0; i < boardSize*boardSize; i++){
        $("#board").append('<li class="item"></li>');
    }

    setNumber(1,0, 2);
    console.log(boardArr);

}


function setNumber(x, y, num){
    boardArr[x][y] = num;
}