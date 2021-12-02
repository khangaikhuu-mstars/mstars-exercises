
class Ship {
    constructor(h, w, tp, wt,) {
        this.height = h;
        this.width = w;
        this.type = tp;
        this.weight = wt;
    }
    get status() {
        console.log('Status:');
        console.log('active');
        console.log('roaming');
        console.log('swimming');
        console.log('--------');
    };
    get activity() {
        const today = new Date;
        return today;
    }
    get info(){
        return console.log(`
                This is a ${this.type} ship.
                Height: ${this.height}
                Weight: ${this.weight}
                Width: ${this.width}
                `)
    }
    set shipType(type) {
        this.type = type;
    }
    set changeOwner(owner) {
        this._owner = owner;
    }
}

class Owner{
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
}   


const person = new Owner('Anar', 'Ulaanbaatar', 88887777);
console.log(person);
const company = new Owner('MCS', 'Ulaanbaatar', 77778888);
console.log(company);



const fighterShip = new Ship(20, 40, 'fighter', 10000);

console.log(fighterShip);

fighterShip.shipType = 'pirate';
fighterShip.info;
fighterShip.status;
console.log(fighterShip.activity);

fighterShip.owner = company;
console.log(fighterShip);




const luxuryShip = new Ship(20, 40, 'luxury', 100000);
const normalShip = new Ship(30, 50, 'normal', 100000);
const carrierShip = new Ship(30, 50, 'carrier', 100000);
const inteligenceShip = new Ship(30, 50, 'uboat', 20000);
const fishingShip = new Ship(5, 20, 'fishing', 1000);

// const ships = [fighterShip, normalShip, carrierShip, inteligenceShip, fishingShip];
// console.log(ships);
