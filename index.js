let player1Turn = true
let playerOneScore = 0
let playerTwoScore = 0

const playerMessage = document.getElementById('player-message')
const player1Score = document.getElementById('player1-score')
const player2Score = document.getElementById('player2-score')
const player1Dice = document.getElementById('player1-dice')
const player2Dice = document.getElementById('player2-dice')
const rollBtn = document.getElementById('roll-btn')
const resetBtn = document.getElementById('reset-btn')

const dice = ['./img/dice-01.svg',
    './img/dice-02.svg',
    './img/dice-03.svg',
    './img/dice-04.svg',
    './img/dice-05.svg',
    './img/dice-06.svg']


//Event listener for the roll button   
rollBtn.addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * 6 + 1) //generates a random number 1-6

    if (player1Turn) {

        playerOneScore += randomNumber
        player1Score.textContent = playerOneScore
        player1Dice.src = dice[randomNumber - 1] //subtracts 1 from yhe random number to match the array indexes
        playerMessage.textContent = 'Player 2 Turn'
        player1Dice.classList.remove('border') //removes the border utility class from player 1 dice
        player2Dice.classList.add('border') //adds the border utility class to player 2 dice

    } else {

        playerTwoScore += randomNumber
        player2Score.textContent = playerTwoScore
        player2Dice.src = dice[randomNumber - 1] //subtracts 1 from yhe random number to match the array indexes
        playerMessage.textContent = 'Player 1 Turn'
        player2Dice.classList.remove('border') //removes the border utility class from player 2 dice
        player1Dice.classList.add('border') //adds the border utility class to player 1 dice
    }

    if (playerOneScore >= 30) {
        playerMessage.textContent = 'Player 1 Wins'
        player1Score.style.color = 'var(--clr-accent)'
        rollBtn.style.display = 'none'
        resetBtn.style.display = 'inline-block'
    } else if (playerTwoScore >= 30) {
        playerMessage.textContent = 'Player 2 Wins'
        player2Score.style.color = 'var(--clr-accent)'
        rollBtn.style.display = 'none'
        resetBtn.style.display = 'inline-block'
    }

    player1Turn = !player1Turn //switches the boolean value to alternate between players
})



//Event listener for the reset button
resetBtn.addEventListener('click', function () {
    playerMessage.textContent = 'Player 1 Turn'
    player1Score.textContent = 0
    player2Score.textContent = 0
    playerOneScore = 0
    playerTwoScore = 0
    player1Score.style.color = '' //resets to the default style
    player2Score.style.color = ''
    player1Dice.src = dice[0]
    player2Dice.src = dice[0]
    rollBtn.style.display = 'inline-block'
    resetBtn.style.display = 'none'
    player2Dice.classList.remove('border')
    player1Dice.classList.add('border')
})