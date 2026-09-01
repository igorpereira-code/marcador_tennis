let scorePlayer1 = 0;
let scorePlayer2 = 0;

const score1Button = document.getElementById("score1-button");
const score2Button = document.getElementById("score2-button");
const scoresDiv = document.getElementById("scores-div");

function mostrarScore() {
  scoresDiv.innerHTML = `
    <h2>Marcador</h2>
    <p>Jugador 1: ${scorePlayer1}</p>
    <p>Jugador 2: ${scorePlayer2}</p>
  `;
}

score1Button.addEventListener("click", () => {
  scorePlayer1++;
  mostrarScore();
});

score2Button.addEventListener("click", () => {
  scorePlayer2++;
  mostrarScore();
});
