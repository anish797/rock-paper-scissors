function getComputerChoice(){
  let computerChoice=Math.ceil(Math.random()*3);
  if(computerChoice==1){
    return "Rock";
  } else if(computerChoice==2){
    return "Paper";
  } else if(computerChoice==3){
    return "Scissors";
  }
}

function playRound(playerChoice,computerChoice,userScore){
  if(playerChoice=="rock" && computerChoice=="paper"){
    console.log("You Lose! Paper beats Rock");
    return -1;
  } else if(playerChoice=="rock" && computerChoice=="scissors"){
      console.log("You Win! Rock beats Scissors");
      return 1;
  } else if(playerChoice=="rock" && computerChoice=="rock"){
      console.log("It's a draw, no one wins!");
      return 0;
  } else if(playerChoice=="paper" && computerChoice=="rock"){
      console.log("You Win! Paper beats Rock");
      return 1;
  } else if(playerChoice=="paper" && computerChoice=="paper"){
      console.log("It's a draw, no one wins!");
      return 0;
  } else if(playerChoice=="paper" && computerChoice=="scissors"){
      console.log("You Lose! Scissors beats Paper");
      return -1;
  } else if(playerChoice=="scissors" && computerChoice=="rock"){
      console.log("You Lose! Rock beats Scissors");
      return -1;
  } else if(playerChoice=="scissors" && computerChoice=="paper"){
      console.log("You Win! Scissors beats Paper");
      return 1;
  } else if(playerChoice=="scissors" && computerChoice=="scissors"){
      console.log("It's a draw, no one wins!");
      return 0;
  } else{
    console.log("Invalid choice");
  }
}

function playGame(){
  let playerScore = 0;
  let computerScore = 0;
  for(let i=1;i<=5;i++){
    let playerChoice=prompt("Enter your choice").toLowerCase();
    let computerChoice=getComputerChoice().toLowerCase();
    let winner = playRound(playerChoice,computerChoice);
    if(winner===1){
      playerScore++;
    } else if(winner===-1){
      computerScore++;
    }
  }
  if(playerScore>computerScore){
    console.log(`The score is ${playerScore}-${computerScore}. You Win!`);
  } else if(playerScore<computerScore){
    console.log(`The score is ${playerScore}-${computerScore}. You Lose!`);
  } else{
    console.log(`The score is ${playerScore}-${computerScore}. It's a Draw!`);
  }
}

playGame();