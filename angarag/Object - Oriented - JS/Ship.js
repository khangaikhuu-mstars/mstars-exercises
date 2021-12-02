class Ship {
    constructor(height, weight, width, type) {
        this.height = height;
        this.weight = weight;
        this.width = width;
        this.type = type;
    }
    get activity() {
        const today = new Date()
        return today
    }
    get info() {
        return `This is ${this.type} ship. Its ${this.height} meters. It is very big, ${this.width} meters. Also its very heavy, ${this.weight} kilograms.`
    }

    set shipType(t) {
        this.type = t
    }
    set changeOwner(owner) {
        this._owner = owner;
    }
    get owner() {
        return this._owner
    }
}
class Owner {
    constructor(name, adress, phone) {
        this.name = name;
        this.adress = adress;
        this.phone = phone;
    }
}
const individual = new Owner("angarag", "planet mars", "99195457")
const org = new Owner("Fantasy Sex Shop", "SBD, Hangai hothon", "70696969")
console.log(org)


const war = new Ship(7, 200, 10, "war");
console.log(war)
console.log(war.info)
war.shipType = "gang"
console.log(war.type)
const fishing = new Ship(10, 20, 40, "fishing")
console.log(fishing)

const trading = new Ship(40, 2000, 30, "trading")
console.log(trading)

const submarine = new Ship(20, 80, 900, "submarine")
console.log(submarine)

const pirate = new Ship(10, 50, 20, "pirate")
console.log(pirate)

war.changeOwner = individual
console.log(war.owner.name, war.owner.adress, war.owner.phone)
console.log(war)