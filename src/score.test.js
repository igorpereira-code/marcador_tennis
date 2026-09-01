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
});
