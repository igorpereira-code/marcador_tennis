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
    const p1 = this.j1.score;
    const p2 = this.j2.score;
    const diferencia = Math.abs(p1 - p2);

    // Alguien ya ganó sin pasar por deuce (llegó a 4 con el otro en 0,1,2,3)
    if ((p1 >= 4 || p2 >= 4) && diferencia >= 2) {
      return p1 > p2 ? "Game for Player 1" : "Game for Player 2";
    }

    if (p1 === 3 && p2 === 3) {
      return "Deuce";
    }

    // Fase normal: ambos siguen por debajo de 4 puntos (Love/15/30/40)
    if (p1 < 4 && p2 < 4) {
      return `${scores[p1]} - ${scores[p2]}`;
    }

    // A partir de aquí, ambos están en 3+ (fase de deuce)
    if (p1 === p2) {
      return "Deuce";
    }
  }
}

export default Tennis;
