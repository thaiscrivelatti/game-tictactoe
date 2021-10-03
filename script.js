var player = null;
var currentPlayer = document.getElementById("current-player");
var winner = document.getElementById("winner");

changePlayer('X');

// Pega todas as divs com classe "square"
const squares = document.querySelectorAll(".square");

// Adiciona onClick de clique em todos os quadrados
squares.forEach((square) => {
    square.onclick = () => escolherQuadrado(square.id);
});

function escolherQuadrado(id){
    var square = document.getElementById(id);
    if (winner.innerHTML !== "") {
        return;
    }

    if (square.innerHTML !== '-') {
        return;
    }
        
    square.innerHTML = player;
    square.style.color = '#000';

    if (player === 'X'){
        player = 'O';
    } else {
        player = 'X';
    }
    changePlayer(player);
    winnerCheck();
}

function changePlayer(value){
    player = value;
    currentPlayer.innerHTML = player;
}

function winnerCheck(){
    // Primeira fileira, quadrados 1, 2, 3
    if (sequenceCheck(squares[0], squares[1], squares[2])) {
        changeColor(squares[0], squares[1], squares[2]);
        changeWinner(squares[0]);
        return;
    }
    // Segunda fileira, quadrados 4, 5, 6
    if (sequenceCheck(squares[3], squares[4], squares[5])) {
        changeColor(squares[3], squares[4], squares[5]);
        changeWinner(squares[3]);
        return;
    }
    // Terceira fileira, quadrados 7, 8, 9
    if (sequenceCheck(squares[6], squares[7], squares[8])) {
        changeColor(squares[6], squares[7], squares[8]);
        changeWinner(squares[6]);
        return;
    }
    // Primeira coluna, quadrados 1, 4, 7
    if (sequenceCheck(squares[0], squares[3], squares[6])) {
        changeColor(squares[0], squares[3], squares[6]);
        changeWinner(squares[0]);
        return;
    }
    // Segunda coluna, quadrados 2, 5, 8
    if (sequenceCheck(squares[1], squares[4], squares[7])) {
        changeColor(squares[1], squares[4], squares[7]);
        changeWinner(squares[1]);
        return;
    }
    // Terceira coluna, quadrados 3, 6, 9
    if (sequenceCheck(squares[2], squares[5], squares[8])) {
        changeColor(squares[2], squares[5], squares[8]);
        changeWinner(squares[2]);
        return;
    }
    // Diagonal 1, 5, 9
    if (sequenceCheck(squares[0], squares[4], squares[8])) {
        changeColor(squares[0], squares[4], squares[8]);
        changeWinner(squares[2]);
        return;
    }
    // Diagonal 3, 5, 7
    if (sequenceCheck(squares[2], squares[4], squares[6])) {
        changeColor(squares[2], squares[4], squares[6]);
        changeWinner(squares[2]);
        return;
    }
}

function sequenceCheck(s1, s2, s3){
    let isEqual = false;
    if ((s1.innerHTML !== '-' && s1.innerHTML === s2.innerHTML) && (s2.innerHTML === s3.innerHTML)) {
        isEqual = true;
    }
    console.log(s1.id, s2.id, s3.id, isEqual);
    return isEqual;
}

function changeColor(s1,s2,s3) {
    s1.style.background = "#0f0";
    s2.style.background = "#0f0";
    s3.style.background = "#0f0";
}

function changeWinner(square){
    winner.innerHTML = square.innerHTML;
}

function restart(){
    winner.innerHTML = "";
    squares.forEach((square) => {
        square.style.background = "#eee";
        square.style.color = "#eee";
        square.innerHTML = '-';
    })
    changePlayer('X');
}


