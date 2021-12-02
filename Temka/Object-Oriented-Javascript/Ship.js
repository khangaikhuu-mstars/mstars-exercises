

class Ship{
    constructor(height, weight, width, type){
        this.height = height;
        this.weight = weight
        this.width = width;
        this.type = type;
    }
    get swimming(){
        console.log("Swimming");
    }
    get activity(){
        const today = new Date()
        return `${this.type} ${today}`
    }

    get info(){
        return `This is ${this.type} ship. I have weight: ${this.weight}, height: ${this.height}, width: ${this.width} `
    }

    set shipType(t){
        this.type = t;
    }
    set changeOwner(owner){
        this._owner = owner // backup property
    }

    get Owner(){
        return this._owner;
    }
}

const military_ship = new Ship(10, 75,200, "military");
console.log(military_ship)
console.log(military_ship.swimming)
console.log(military_ship)
console.log(military_ship.activity)
console.log(military_ship.info)
// set function
military_ship.shipType="pirate"
console.log(military_ship.type)


// const fisherman_ship = new Ship(10,20,30, "fisherman")
// console.log(fisherman_ship)
// console.log(fisherman_ship.swimming())

// const cargo_ship = new Ship(10,10,10, "cargo")
// console.log(cargo_ship)
// console.log(cargo_ship.swimming())

// const tourist_ship =  new Ship(100,100,100, "tourist")
// console.log(tourist_ship)
// console.log(tourist_ship.swimming())

// const transport_ship = new Ship(10,10,30, "transport")
// console.log(transport_ship)
// console.log(transport_ship.swimming())



class Owner{
    constructor(name,address,phone){
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    get getName(){
        return this.name
    }
    
}

const ownerCompany = new Owner("MCS", "Central Tower", "77771122")
const ownerIndividual = new Owner("James Bond", "London, England", "+88997766")



military_ship.changeOwner = ownerCompany
console.log(military_ship.Owner.name)
