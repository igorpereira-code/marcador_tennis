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
    } else {
      return "Love - Love";
    }
  }
}

export default Tennis;
