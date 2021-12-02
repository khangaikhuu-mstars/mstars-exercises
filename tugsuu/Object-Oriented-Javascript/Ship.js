class Ship {
    constructor(height, weight, width, type) {
        this.height = height;
        this.weight = weight;
        this.width = width;
        this.type = type;
    }
    get swimming (){
        console.log("ene hesgiig oilgohgui bn")
    }

    get activity(){
        const today = new Date()
        return `${this.type} ${today}`
    } 
    get info(){
        return `This is ${this.type} ship. I have ${this.height}, ${this.weight}, ${this.width}, ${this.type}`
    }
}
const fighterShip = new Ship(7, 10, 5, "fighter")
const fishingShip = new Ship(5, 12, 32, "fishing")
const passengerShip = new Ship(10, 15, 25, "passenger")
const terminalShip = new Ship(23, 17, 55, "terminal")
const Uboot = new Ship(2, 9, 15, "Uboot")

console.log(fighterShip)
console.log(fishingShip)
console.log(passengerShip)
console.log(terminalShip)
console.log(Uboot)

fighterShip.type = "Travel"
fighterShip.height = 5000
fighterShip.swimming    //ene yg yagaad bgan boloo

console.log(Uboot.swimming)
console.log(fighterShip.activity)
console.log(passengerShip.info)
console.log(terminalShip.info)