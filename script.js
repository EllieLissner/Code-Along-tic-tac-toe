//DOM Content Loaded event listener
window.addEventListener("DOMContentLoaded", () => {
//Capture DOM elements from page to store as variables
let displayResults = document.getElementById("displayResults")
let resetBtn = document.getElementById("reset")
let gameboard = document.getElementById("gameboard")
let displayTurn = document.getElementById("displayTurn")
//Create or declare all game logic variable and conditions
let turnNum = 0
let playerX = []
let playerO = []

// Function boxClick() --> add event listener on user click of game tile
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