class Ship {
  constructor(h, w, wi, t) {
    this.height = h;
    this.weight = w;
    this.width = wi;
    this.type = t;
  }
  get swimming() {
    console.log("I'm swimming.");
  }
  get activity() {
    const today = new Date();
    return `${this.type} ${today}`;
  }
  get info() {
    return `This is ${this.type} ship. That ship's height is ${this.height}, weight is ${this.weight}, width is ${this.width}.`;
  }
}

const fighterShip = new Ship(7, 10, 5, "fighter");
const containerShip = new Ship(15, 20, 10, "container");
const spyShip = new Ship(12, 42, 54, "spy");
const militaryShip = new Ship(3, 4, 5, "military");
const passengerShip = new Ship(54, 23, 65, "passenger");

console.log(fighterShip.swimming);
console.log(containerShip);
console.log(spyShip);
console.log(militaryShip);
console.log(passengerShip);

passengerShip.type = "typeChangedShip";
console.log(passengerShip);
console.log(spyShip.activity);
console.log(spyShip.info);
