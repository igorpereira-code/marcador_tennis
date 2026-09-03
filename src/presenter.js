import Tennis from "./score.js";

const tenis = new Tennis();

const score1Button = document.getElementById("score1-button");
const score2Button = document.getElementById("score2-button");
const scoresDiv = document.getElementById("scores-div");

function mostrarScore() {
  scoresDiv.innerHTML = `
    <h2>Marcador</h2>
    <p>${tenis.obtenerScore()}</p>
  `;
}

score1Button.addEventListener("click", () => {
  tenis.j1.anota();
  mostrarScore();
});

score2Button.addEventListener("click", () => {
  tenis.j2.anota();
  mostrarScore();
});

mostrarScore();
