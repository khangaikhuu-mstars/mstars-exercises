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

  set shipType(t) {
    this.type = t;
  }

  set changeOwner(owner) {
    this._owner = owner;
  }

  get owner() {
    return this._owner;
  }
}

class Owner {
  constructor(name, address, phoneNumber) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }

  name() {
    return this.name;
  }
}

const fighterShip = new Ship(7, 10, 5, "fighter");
const containerShip = new Ship(15, 20, 10, "container");
const spyShip = new Ship(12, 42, 54, "spy");
const militaryShip = new Ship(3, 4, 5, "military");
const passengerShip = new Ship(54, 23, 65, "passenger");

const person1 = new Owner("Amarsanaa", "Khan-Uul district", "89113535");
const corp1 = new Owner("Unitel LLC", "Sukhbaatar district", "77778888");

console.log(fighterShip.swimming);
console.log(containerShip);
console.log(spyShip);
console.log(militaryShip);
console.log(passengerShip);

passengerShip.type = "typeChangedShip";
console.log(passengerShip);
console.log(spyShip.activity);
console.log(spyShip.info);

passengerShip.shipType = "TYPE CHANGED";
console.log(passengerShip);

fighterShip.changeOwner = corp1;

console.log(fighterShip);
console.log(fighterShip.owner.name);
