class Ship {
    constructor(heigth, weight, width, type) {
        this.heigth = heigth;
        this.weight = weight;
        this.width = weight;
        this.type = type;
    }
    get swimming(){
        console.log('swimming');
    }
    get activity(){
        const today = new Date();
        return today
    }
    get info(){
        return `This is ${this.type} ship. i have height: ${this.heigth}, weight: ${this.weight}, widht: ${this.width}`
    }
};
const fighterShip = new Ship(7,10,5,'fighter');
console.log(fighterShip);
const battleShip = new Ship(7,10,5,'battle');
console.log(battleShip);
const fishingShip = new Ship(7,10,5,'fishing');
console.log(fighterShip)
const spiShip = new Ship(7,10,5,'spiTool');
console.log(spiShip)
fighterShip.swimming;
console.log(fighterShip.activity)
console.log(fighterShip.info)
