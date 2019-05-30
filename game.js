<script>
// these are the global variables //

var roundNumber = 0; //this variable will be used to control the number of loops of the function game()
var computerScore = 0;
var playerScore = 0;

function playRound(playerChoice, computerChoice){

    switch (computerSelection){
        case 0: computerSelection = "rock";
        break;
    
        case 1: computerSelection = "paper";
        break;

        case 2: computerSelection = "scissors";
        break;
    }

    if (computerSelection == playerSelection){
        console.log("Computer's" + computerSelection + "vs Player's" + playerSelection +": It's a tie!");
    } else if (computerSelection == "rock" && playerSelection == "paper"){
        console.log("Computer's" + computerSelection + "vs Player's" + playerSelection +": Congratulations, you won!");
        playerScore++;
    } else if (computerSelection == "scissors" && playerSelection == "paper"){
        console.log("Computer's" + computerSelection + "vs Player's" + playerSelection +": You lose!");
        computerScore++;
    } else if (computerSelection == "paper" && playerSelection == "scissors"){
        console.log("Computer's" + computerSelection + "vs Player's" + playerSelection +": Congratulations, you won!");
        playerScore++;
    } else {
        console.log("Computer's" + computerSelection + "vs Player's" + playerSelection +": You lose!");
        computerScore++;
    }
}

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function game(){
    playerSelection = prompt("Please make your pick (Paper, Rock, or Scissors)").toLowerCase();
    computerSelection = getComputerChoice();
    playRound (playerSelection, computerSelection);
    roundNumber++;
}

while (roundNumber < 5){
    game();
}

console.log("Player score:" + playerScore + "\n Computer Score:" + computerScore);

</script>