import Tennis from "./score.js";

describe("Tenis", () => {
  //Cuando scrore 0 - 0
  it("Deberia mostrar Love - Love cuando ambos jugadores tienen 0 puntos", () => {
    let tenis = new Tennis();
    expect(tenis.obtenerScore()).toEqual("Love - Love");
  });
  //Cuando jugador 1 anota, score 15 - Love
  it("Deberia mostrar 15 - Love cuando el jugador 1 tiene 1 punto y el jugador 2 tiene 0 puntos", () => {
    let tenis = new Tennis();
    tenis.j1.anota();
    expect(tenis.obtenerScore()).toEqual("15 - Love");
  });
  //Cuando jugador 1 anota de nuevo, score 30 - Love
  it("Deberia mostrar 30 - Love cuando el jugador 1 tiene 2 puntos y el jugador 2 tiene 0 puntos", () => {
    let tenis = new Tennis();
    tenis.j1.anota();
    tenis.j1.anota();
    expect(tenis.obtenerScore()).toEqual("30 - Love");
  });
  //Cuando jugador 1 anota de nuevo, score 40 - Love
  it("Deberia mostrar 40 - Love cuando el jugador 1 tiene 3 puntos y el jugador 2 tiene 0 puntos", () => {
    let tenis = new Tennis();
    tenis.j1.anota();
    tenis.j1.anota();
    tenis.j1.anota();
    expect(tenis.obtenerScore()).toEqual("40 - Love");
  });

  //Cuando jugador 1 anota de nuevo, score Game for Player 1
  it("Deberia mostrar Game for Player 1 cuando el jugador 1 tiene 4 puntos y el jugador 2 tiene 0 puntos", () => {
    let tenis = new Tennis();
    tenis.j1.anota();
    tenis.j1.anota();
    tenis.j1.anota();
    tenis.j1.anota();
    expect(tenis.obtenerScore()).toEqual("Game for Player 1");
  });
  //Cuando jugador 2 anota, score 0 - 15
  it("Deberia mostrar Love - 15 cuando el jugador 1 tiene 0 puntos y el jugador 2 tiene 1 punto", () => {
    let tenis = new Tennis();
    tenis.j2.anota();
    expect(tenis.obtenerScore()).toEqual("Love - 15");
  });
  //Cuando jugador 2 anota de nuevo, score 0 - 30
  it("Deberia mostrar Love - 30 cuando el jugador 1 tiene 0 puntos y el jugador 2 tiene 2 puntos", () => {
    let tenis = new Tennis();
    tenis.j2.anota();
    tenis.j2.anota();
    expect(tenis.obtenerScore()).toEqual("Love - 30");
  });

  //Cuando jugador 2 anota de nuevo, score 0 - 40
  it("Deberia mostrar Love - 40 cuando el jugador 1 tiene 0 puntos y el jugador 2 tiene 3 puntos", () => {
    let tenis = new Tennis();
    tenis.j2.anota();
    tenis.j2.anota();
    tenis.j2.anota();
    expect(tenis.obtenerScore()).toEqual("Love - 40");
  });
  //Cuando jugador 2 anota de nuevo, score Game for player 2
  it("Deberia mostrar Game for Player 2 cuando el jugador 1 tiene 0 puntos y el jugador 2 tiene 4 puntos", () => {
    let tenis = new Tennis();
    tenis.j2.anota();
    tenis.j2.anota();
    tenis.j2.anota();
    tenis.j2.anota();
    expect(tenis.obtenerScore()).toEqual("Game for Player 2");
  });
  //Cuando ambos jugadores anotan, score 30 - 30
  it("Deberia mostrar 30 - 30 cuando ambos jugadores tienen 2 puntos", () => {
    let tenis = new Tennis();
    tenis.j1.anota();
    tenis.j2.anota();
    tenis.j1.anota();
    tenis.j2.anota();
    expect(tenis.obtenerScore()).toEqual("30 - 30");
  });
  //Cuando ambos jugadores empatan 40 - 40
  it("Deberia mostrar Deuce cuando ambos jugadores tienen 3 puntos", () => {
    let tenis = new Tennis();
    tenis.j1.anota();
    tenis.j2.anota();
    tenis.j1.anota();
    tenis.j2.anota();
    tenis.j1.anota();
    tenis.j2.anota();
    expect(tenis.obtenerScore()).toEqual("Deuce");
  });
});
