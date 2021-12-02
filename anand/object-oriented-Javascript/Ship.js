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
    set shipType(t){
        this.type=t
    }
    set changeOwner(o){
        this._owner=o
    }
    get owner (){
        return this._owner
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
console.log(containerShip.shipType='Fighta')
class Owner {
    constructor(name, address, phoneNumber){
        this.name= name
        this.address= address
        this.phoneNumber= phoneNumber
    }
}
const mrMan = new Owner('Jack', 'Usa', 71718080)
const msWoman = new Owner('Jill', 'Belgium', 78787079)
containerShip.changeOwner= mrMan
console.log(containerShip)