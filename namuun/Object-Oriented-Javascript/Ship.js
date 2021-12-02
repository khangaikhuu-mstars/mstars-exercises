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
}
const battleShip = new Ship(7, 10, 5, 'battle');
console.log(battleShip)
const fishingShip = new Ship(1, 5, 3, 'fishing');
console.log(fishingShip)
const passengerShip = new Ship(10, 50, 30, 'passenger');
console.log(passengerShip)
const achaaShip = new Ship(7, 11, 6, 'achaa');
console.log(achaaShip)
const tagnuulShip = new Ship(3, 7, 4, 'tagnuul');
console.log(tagnuulShip)

battleShip.swimming

achaaShip.type = "achaanii mashin"

console.log(battleShip.activity)
console.log(passengerShip.info)