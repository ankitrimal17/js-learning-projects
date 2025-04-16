const gameCont = document.querySelector(".game-cont1");

let currentPlayer = "O";
const changePlayer = document.querySelector(".player-info-cont");

gameCont.addEventListener("click", (event) => {
    const gameCell = event.target;

    if(gameCell.textContent === ""){
        gameCell.textContent = currentPlayer;
        changePlayer.textContent = currentPlayer === "O" ? "Player 2's Turn" : "Player 1's Turn" ;
        currentPlayer = currentPlayer === "O" ? "X" : "O" ;
    }
});

