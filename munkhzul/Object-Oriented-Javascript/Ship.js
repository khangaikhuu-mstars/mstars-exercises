class Ship {
    constructor(height, weight, width, type) {
        this.height = height;
        this.weight = weight;
        this.width = width;
        this.type = type;
    }
    get swimming() {
        console.log("swimming");
    }
    get activity() {
        const today = new Date();
        return `${this.type} ${today}`;
    }
    get info() {
        return `This is ${this.type} ship. This ship weight: ${this.weight}, height: ${this.height}, width: ${this.width}`
    }
}
const fighter_ship = new Ship(7,10,5,"fighter");
const war_ship = new Ship(8,11,6,"war");
const tanker_ship = new Ship(9,12,7,"tanker");
const passenger_ship = new Ship(10,20,8,"passenger");
const offshore_ship = new Ship(12,30,10,"offshore");

console.log(fighter_ship);
console.log(war_ship);
console.log(tanker_ship);
console.log(passenger_ship);
console.log(offshore_ship);

fighter_ship.type = "H";
console.log(fighter_ship);

fighter_ship.swimming;
console.log(war_ship.activity);
console.log(war_ship.info);