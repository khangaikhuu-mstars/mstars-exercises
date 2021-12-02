class Ship {
    constructor(heigth, weight, width, type) {
        this.heigth = heigth;
        this.weight = weight;
        this.width = weight;
        this.type = type;
    }
    get swimming() {
        console.log('swimming');
    }
    get activity() {
        const today = new Date();
        return today
    }
    get info() {
        return `This is ${this.type} ship. i have height: ${this.heigth}, weight: ${this.weight}, widht: ${this.width}`
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
};
const fighterShip = new Ship(7, 10, 5, 'fighter');
fighterShip.shipType = "pirate"
console.log(fighterShip);
const battleShip = new Ship(7, 10, 5, 'battle');
console.log(battleShip);
const fishingShip = new Ship(7, 10, 5, 'fishing');
console.log(fighterShip)
const spiShip = new Ship(7, 10, 5, 'spiTool');
console.log(spiShip)
fighterShip.swimming;
console.log(fighterShip.activity)
console.log(fighterShip.info)

class Owner {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    name() {
        return this.name
    }
};
const employe = new Owner('Tserendorj', 'UB 26r Khoroo OlympVillage', '99489843');
const company = new Owner('Usukh_Od Table Tennis Club', 'Chuhag Khothon', '85026802');
const company2 = new Owner('MCS', 'Ulaanbaatar', '+1234567890');

fighterShip.changeOwner = company2;
console.log(fighterShip)
console.log(fighterShip.owner.name)