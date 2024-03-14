const result = document.querySelector(".result");
// const score = document.querySelector(".score");
const finalResult = document.querySelector(".finalResult");
const player = document.querySelector(".player");
const comp = document.querySelector(".comp");
const rules = document.querySelector(".rules");
const yourScore = document.querySelector(".your-score");
const cpuScore = document.querySelector(".cpu-score");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
  let computerChoice=Math.ceil(Math.random()*3);
  if(computerChoice==1){
    comp.innerHTML="";
    comp.innerHTML=`<img src="./images/rock.png" alt="rock"></img>`;
    return "Rock";
  } else if(computerChoice==2){
    comp.innerHTML="";
    comp.innerHTML=`<img src="./images/paper.png" alt="paper"></img>`;
    return "Paper";
  } else if(computerChoice==3){
    comp.innerHTML="";
    comp.innerHTML=`<img src="./images/scissors.png" alt="scissors"></img>`;
    return "Scissors";
  }
}

function playRound(playerChoice){
  let computerChoice=getComputerChoice().toLowerCase();
  if(playerChoice=="rock"){
    player.innerHTML=`<img src="./images/rock.png" alt="rock"></img>`;
    if(computerChoice=="rock"){
      rules.textContent= "It's a draw, no one wins!";
    }else if(computerChoice=="paper"){
      rules.textContent= "You Lose! Paper beats Rock";
      computerScore++;
    }else{
      rules.textContent= "You Win! Rock beats Scissors";
      playerScore++;
    }
  }else if(playerChoice=="paper"){
    player.innerHTML=`<img src="./images/paper.png" alt="paper"></img>`;
    if(computerChoice=="rock"){
      rules.textContent= "You Win! Paper beats Rock";
      playerScore++;
    }else if(computerChoice=="paper"){
      rules.textContent= "It's a draw, no one wins!";
    }else{
      rules.textContent= "You Lose! Scissors beats Paper";
      computerScore++;
    }
  }else{
    player.innerHTML=`<img src="./images/scissors.png" alt="scissors"></img>`;
    if(computerChoice=="rock"){
      rules.textContent= "You Lose! Rock beats Scissors";
      computerScore++;
    }else if(computerChoice=="paper"){
      rules.textContent= "You Win! Scissors beats Paper";
      playerScore++;
    }else{
      rules.textContent= "It's a draw, no one wins!";
    }
  }
  yourScore.textContent = `${playerScore}`;
  cpuScore.textContent = `${computerScore}`;
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
  }

  
}

const buttons = document.querySelectorAll(".playerChoices");
buttons.forEach((button)=>{
  button.addEventListener("click",()=>{
    let choice=button.getAttribute("data-choice");
    playRound(choice);
  });
});

const images = document.querySelectorAll("button img");
images.forEach((image)=>{
  image.addEventListener('mouseover', function() {
    this.classList.add('hovered');
  });
  image.addEventListener('mouseout', function() {
    this.classList.remove('hovered');
  });
})