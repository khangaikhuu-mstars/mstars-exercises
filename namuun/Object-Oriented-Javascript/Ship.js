class Ship {
    constructor(height, weight, width, type){
        this.height = height;
        this.weight = weight;
        this.width = width;
        this.type = type;
    }
    get swimming () {
        console.log("swimming")
    }
    get activity () {
        const today = new Date();
        return `${this.type} ${today}`
    }
    get info () {
        return `This is ${this.type} ship. Its height is ${this.height}, weight is ${this.weight} and the width is ${this.width}.`
    }
    set shipType (t) {
        this.type = t
    }
}
const battleShip = new Ship(7, 10, 5, 'battle');
const fishingShip = new Ship(1, 5, 3, 'fishing');
const passengerShip = new Ship(10, 50, 30, 'passenger');
const achaaShip = new Ship(7, 11, 6, 'achaa');
const tagnuulShip = new Ship(3, 7, 4, 'tagnuul');

console.log(battleShip)
console.log(fishingShip)
console.log(passengerShip)
console.log(achaaShip)
console.log(tagnuulShip)
battleShip.swimming

achaaShip.type = "achaanii mashin"

console.log(battleShip.activity)
console.log(passengerShip.info)
fishingShip.shipType = "pirate"

class Owner {
    constructor(id, address, phone){
        this.ID = id;
        this.address = address;
        this.phone = phone;
    }
    set changeOwner(owner){
        this_owner = owner;
    }
}
const person = new Owner(1529, "BZD, 25-r khoroo", 89898989);
const company = new Owner("d-0505", "SBD, 6-r khoroo", 77771080);
console.log(person)
battleShip.changeOwner = company;
console.log(battleShip)