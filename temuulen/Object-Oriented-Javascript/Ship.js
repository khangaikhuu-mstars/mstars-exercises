class Ship {
    constructor(h, w, wi, type) {
        this.height = h;
        this.weight = w;
        this.width = wi;
        this.type = type;
    }    
    get swimming() {
        console.log("swimming")
    }
    get activity() {
        const today = new Date();
        return `${fighterShip.type}, ${today}`;
    }
    get info() {
        return `This is ${this.type} ship. I have ${fishingShip.height}, ${fishingShip.weight}, ${fishingShip.width}`
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
const fighterShip = new Ship(7, 10, 5, "fighter");
const fishingShip = new Ship(7, 10, 5, "fishing");
const travelShip = new Ship(7, 10, 5, "travel");
const containerShip = new Ship(7, 10, 5, "container");
const passengerShip = new Ship(7, 10, 5, "passenger");
const fighter = new Ship(7, 10, 5, "pirate")
console.log(fighterShip);
console.log(fishingShip);
console.log(travelShip);
console.log(containerShip);
console.log(passengerShip);

fighterShip.type = "naval";

console.log(fishingShip.activity);
console.log(fishingShip.info);

fighter.shipType = "ponana";
console.log(fighter)

class Owner {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    name() {
        return this.name;
    } 
}

const person = new Owner("Panini", "golomt", 80886743);
const company = new Owner("SUU", "UB", 99161989);
fighter.changeOwner = company;
console.log(fighter);
console.log(fighter.owner);
