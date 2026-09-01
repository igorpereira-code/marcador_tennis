describe("Tenis", () => {
  it("Deberia mostrar Love - Love cuando ambos jugadores tienen 0 puntos", () => {
    let tenis = new Tennis();
    expect(tenis.obtenerScore()).toEqual("Love - Love");
  });
});

class Tennis {
  obtenerScore() {
    return "Love - Love";
  }
}
