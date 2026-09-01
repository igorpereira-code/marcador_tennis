class Jugador {
  constructor() {
    this.puntos = 0;
  }

  anota() {
    this.puntos++;
  }
}

class Tennis {
  constructor() {
    this.jugador1 = new Jugador();
    this.jugador2 = new Jugador();
  }
}
