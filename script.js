//DOM Content Loaded event listener
window.addEventListener("DOMContentLoaded", () => {
    //Capture DOM elements from page to store as variables
    let displayResults = document.getElementById("displayResults")
    let resetBtn = document.getElementById("reset")
    let gameboard = document.getElementById("gameboard")
    let displayTurn = document.getElementById("displayTurn")
    displayTurn.innertext = "Player X goes first"
    //Create or declare all game logic variable and conditions
    let turnNum = 0
    let playerX = []
    let playerO = []

    let winCombo = [
        ["topL", "topM", "topR"],
        ["midL", "midM", "midR"],
        ["botL", "botM", "botR"],
        ["topL", "midM", "botR"],
        ["topR", "midM", "botL"],
        ["topR", "midR", "botR"],
        ["topM", "midM", "botM"],
        ["topL", "midL", "botL"]
    ] 

    function boxClick(event) {
        let tileCheck = event.target
    
        if (tileCheck.classList.contains("playedX") || 
            tileCheck.classList.contains("playedO")) {
            displayTurn.innerText = "Tile already played. Click again."
        } else {
            if (turnNum % 2 === 0) {
                tileCheck.classList.add("playedX")
                tileCheck.innerText = "X"
                displayTurn.innerText = "Player O's turn"
                turnNum++
                playerX.push(tileCheck.id)
            } else {
                tileCheck.classList.add("playedO")
                tileCheck.innerText = "O"
                displayTurn.innerText = "PLayer X's turn"
                turnNum++
                playerO.push(tileCheck.id)
            }
            if (turnNum >= 4) {
                gameOver()
            }
            if (turnNum === 9) {
                gameOver() 
                 if (displayTurn.innerText !== "") {
                    displayTurn.innerText = "Play Again"
                    displayResults.innerText = "Game Tied"
                    stopGame()
                 }
                
            }
        }
    }

    gameboard.addEventListener("click", boxClick)

    function gameOver () { 
        for (let i = 0; i < winCombo.length; i++) {
        let winFoundX = 0
        let winFoundO = 0
        
        for (let y = 0; y < winCombo[i].length; y++) {
          if (playerX.includes(winCombo[i][y])) {
            winFoundX++
            if (winFoundX === 3) {
              displayResults.innerText = "player X has won"
              displayTurn.innerText = ""
              stopGame()
            }
          }
          if (playerO.includes(winCombo[i][y])) {
            winFoundO++
            if (winFoundO === 3) {
              displayResults.innerText = "player O has won"
              displayTurn.innerText = ""
              stopGame()
            }
          }
        }
      }
    }

    function stopGame () {
        gameboard.removeEventListener ("click", boxClick)
    }
    resetBtn.addEventListener("click", function resetGameBoard () {
        let gameTiles = document.getElementsByClassName("gameTile")
        for (let i = 0; i < gameTiles.length; i++) {
            gameTiles[i].classList = "gameTile"
            gameTiles[i].innerText = ""
        }
        displayTurn.innertext = "Player X goes first"
        displayResults.innerText = ""
        gameboard.addEventListener("click", boxClick)

        turnNum = 0
        playerX = []
        playerO = []    
    })
   
// Function boxClick() --> add event listener on user click of game tile
//if box already played, alert user to find another tile to play
// check for X or O turn and display message in displayTurn box 
//accordingly
//check and see if there have been X9 turns but no winner; call
//tied game

//Function: gameOver() --> once we have had more than 4 moves
//check for winner on every turn
//if player has won, send message to displayResults and displayTurn
//div

//Function stopGame() --doesnt allow for further gameplay once game
//won

// Function to resetGameBoard() --> loops through game board
//resets all variables [add event listner to #reset button on click]

})