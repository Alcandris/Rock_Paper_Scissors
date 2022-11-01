const playercards = document.querySelectorAll(".playerCard");

let WinCount = 0;
let LooseCount = 0;
let drawCount = 0;

const arrayChoice = ["paper", "rock", "scissors"];

// const cpuChoice = arrayChoice[Math.floor(Math.random() * arrayChoice.length)];

//FONCTIONS
function jouer(e) {
  const cpuChoice = arrayChoice[Math.floor(Math.random() * arrayChoice.length)];
  let userChoice = e.target.id;
  const userCard = document.getElementById(userChoice);
  const cpuCard = document.getElementById("cpu" + cpuChoice);
  const cpuRecto = document.getElementById("box" + cpuChoice);

  userCard.style.transform = "translateY(-50px)";
  cpuCard.style.transform = "translateY(50px)";
  cpuRecto.style.transform = "rotateX(180deg)";

  setTimeout(() => {
    userCard.style.transform = "translateY(-0px)";
    cpuCard.style.transform = "translateY(0px)";
    cpuRecto.style.transform = "rotateX(0deg)";
  }, 500);

  switch (userChoice + "_" + cpuChoice) {
    case "paper_scissors":
    case "rock_paper":
    case "scissors_rock":
      LooseCount++;
      displayLoose.textContent = LooseCount;
      DisplayStatus.textContent = "You Loose";
      break;
    case "scissors_paper":
    case "paper_rock":
    case "rock_scissors":
      WinCount++;
      displayWin.textContent = WinCount;
      DisplayStatus.textContent = "You Win !";
      break;
    case "scissors_scissors":
    case "paper_paper":
    case "rock_rock":
      drawCount++;
      displaydraw.textContent = drawCount;
      DisplayStatus.textContent = "DRAW";
      break;
  }
}

//ECOUTES
playercards.forEach((card) => {
  card.addEventListener("click", jouer);
});
