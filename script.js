const result = document.querySelector(".result");
const score = document.querySelector(".score")
const finalResult = document.querySelector(".finalResult");
const player = document.querySelector(".player");
const comp = document.querySelector(".comp");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
  let computerChoice=Math.ceil(Math.random()*3);
  if(computerChoice==1){
    comp.innerHTML="";
    comp.innerHTML=`<img src="./images/rock-removebg-preview.png" alt="rock"></img>`
    return "Rock";
  } else if(computerChoice==2){
    comp.innerHTML="";
    comp.innerHTML=`<img src="./images/rock-removebg-preview.png" alt="rock"></img>`
    return "Paper";
  } else if(computerChoice==3){
    comp.innerHTML="";
    comp.innerHTML=`<img src="./images/rock-removebg-preview.png" alt="rock"></img>`
    return "Scissors";
  }
}

function playRound(playerChoice){
  let computerChoice=getComputerChoice().toLowerCase();;
  if(playerChoice=="rock" && computerChoice=="paper"){
    player.innerhtml=`<img src="./images/rock-removebg-preview.png" alt="rock"></img>`;
    result.textContent= "You Lose! Paper beats Rock";
    computerScore++;
  } else if(playerChoice=="rock" && computerChoice=="scissors"){
      player.innerhtml=`<img src="./images/rock-removebg-preview.png" alt="rock"></img>`;
      result.textContent= "You Win! Rock beats Scissors";
      playerScore++;
  } else if(playerChoice=="rock" && computerChoice=="rock"){
      player.innerhtml=`<img src="./images/rock-removebg-preview.png" alt="rock"></img>`;
      result.textContent= "It's a draw, no one wins!";
  } else if(playerChoice=="paper" && computerChoice=="rock"){
      result.textContent= "You Win! Paper beats Rock";
      playerScore++;
  } else if(playerChoice=="paper" && computerChoice=="paper"){
      result.textContent= "It's a draw, no one wins!";
  } else if(playerChoice=="paper" && computerChoice=="scissors"){
      result.textContent= "You Lose! Scissors beats Paper";
      computerScore++;
  } else if(playerChoice=="scissors" && computerChoice=="rock"){
      result.textContent= "You Lose! Rock beats Scissors";
      computerScore++;
  } else if(playerChoice=="scissors" && computerChoice=="paper"){
      result.textContent= "You Win! Scissors beats Paper";
      playerScore++;
  } else if(playerChoice=="scissors" && computerChoice=="scissors"){
      result.textContent= "It's a draw, no one wins!";
  }
  score.textContent=`${playerScore}-${computerScore}`;
  if(playerScore===5){
    if(playerScore>computerScore){
      finalResult.textContent="You Win!";
    }else if(playerScore<computerScore){
      finalResult.textContent="You Lose!";
    }else{
      finalResult.textContent="It's a Draw!";
    }
    playerScore=0;
    computerScore=0;
    score.textContent=`${playerScore}-${computerScore}`;
  }
}

const buttons = document.querySelectorAll(".playerChoices");
buttons.forEach((button)=>{
  button.addEventListener("click",()=>{
    let choice=button.getAttribute("data-choice");
    playRound(choice);
  });
});

if(playerScore===5){
  console.log("hi")
}