class Ship {
    constructor(width, height, weight, type) {
        this.height = height;
        this.weight = weight;
        this.width = width;
        this.type = type;
    }
    get swimming() {
        console.log("swimming");
    };
    get activity() {
        const today = new Date();
        // return today;
        return `${this.type} ${today}`
    }
    get info() {
        return `This is ${this.type} ship. bla3 ${this.height}.bla3 ${this.width}.bla3 ${this.weight}.`
    }
};
const fighterShip = new Ship(7, 10, 5, "fighter");
const containerShip = new Ship(7, 10, 5, "container");
const navalShip = new Ship(7, 10, 5, "naval");
const passengerShip = new Ship(7, 10, 5, "passenger");
const tankerShip = new Ship(7, 10, 5, "tanker");
console.log(fighterShip);
console.log(containerShip);
console.log(navalShip);
console.log(passengerShip);
console.log(tankerShip);
fighterShip.type = "hangover";
console.log(fighterShip);
console.log(fighterShip.swimming)
console.log(fighterShip.activity)
console.log(navalShip.activity)
console.log(navalShip.info)