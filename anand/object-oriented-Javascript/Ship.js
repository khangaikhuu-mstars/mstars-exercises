class Ship{
    constructor(height,weight,width,type){
        this.height=height;
        this.weight=weight;
        this.width=width;
        this.type=type;
    }
    get sail(){
        console.log('Sail')
    }
    get activity(){
        const today = new Date();
        return `${this.type} ${today}`
    }
    get info(){
        return `This is ${this.type} ship. Weight is ${this.weight}.` 
    }
}
const fighterShip = new Ship(7,10,5,'fighter')
console.log(fighterShip.sail)
const fishingShip = new Ship(5,5,2,'fishing')
console.log(fishingShip)
const spyShip = new Ship(6,7,5,'Spy')
console.log(spyShip)
const passengerShip = new Ship(50,1000,20,'passenger')
console.log(passengerShip)
const containerShip = new Ship(20,40,10,'Container')
console.log(containerShip)
console.log(containerShip.activity)
console.log(containerShip.info)
