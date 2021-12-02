class Ship {
    constructor(height, weight, width, type) {
        this.height = height;
        this.weight = weight;
        this.width = width;
        this.type = type;
    }
    get swimming(){
       return "bandi"
    }
    get activity (){
        const today = new Date()
        return today
    }
    get info (){
        return `This is ${this.type} ship. Its ${this.height} meters. It is very big, ${this.width} meters. Also its very heavy, ${this.weight} kilograms.`
    }
}

const warShip = new Ship(7, 200, 10, "warship");
console.log(warShip)
console.log(warShip.activity)
console.log(warShip.swimming)
console.log(warShip.info)
const fishing = new Ship(10, 20, 40, "fishing")
console.log(fishing)

const trading = new Ship(40, 2000, 30, "trading")
console.log(trading)

const submarine = new Ship(20, 80, 900, "submarine")
console.log(submarine)

const pirate = new Ship(10, 50, 20, "pirate")
console.log(pirate)
