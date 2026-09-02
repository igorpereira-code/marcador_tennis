class Jugador {
  constructor() {
    this.score = 0;
  }

  anota() {
    this.score++;
  }
}

class Tennis {
  constructor() {
    this.j1 = new Jugador();
    this.j2 = new Jugador();
  }

  obtenerScore() {
    const scores = ["Love", "15", "30", "40"];

    if (this.j2.score == this.j1.score) {
      return `${scores[this.j1.score]} - ${scores[this.j2.score]}`;
    }
    if (this.j2.score === 0 && this.j1.score <= 3) {
      return `${scores[this.j1.score]} - Love`;
    } else if (this.j1.score === 0 && this.j2.score <= 3) {
      return `Love - ${scores[this.j2.score]}`;
    } else if (this.j1.score === 4 && this.j2.score === 0) {
      return "Game for Player 1";
    } else if (this.j1.score === 0 && this.j2.score === 4) {
      return "Game for Player 2";
    } else {
      return "Love - Love";
    }
  }
}

export default Tennis;
