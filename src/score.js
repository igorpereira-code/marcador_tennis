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
    if (this.j1.score === 1 && this.j2.score === 0) {
      return "15 - Love";
    } else if (this.j1.score === 2 && this.j2.score === 0) {
      return "30 - Love";
    } else if (this.j1.score === 3 && this.j2.score === 0) {
      return "40 - Love";
    } else if (this.j1.score === 4 && this.j2.score === 0) {
      return "Game for Player 1";
    } else if (this.j1.score === 0 && this.j2.score === 1) {
      return "Love - 15";
    } else if (this.j1.score === 0 && this.j2.score === 2) {
      return "Love - 30";
    } else {
      return "Love - Love";
    }
  }
}

export default Tennis;
