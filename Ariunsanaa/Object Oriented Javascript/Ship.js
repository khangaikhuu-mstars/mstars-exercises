class Ship{
    constructor(w, h, wi, ty){
        this.height = h;
        this.weight = w;
        this.width = wi;
        this.type = ty;
    }

    get swimming(){
        console.log("swimming");
    }

    get activity(){
        const today = new Date();
        return `${this.type} ${today}`;
    }

    get info(){
        return `This is ${this.type} ship. I have ${this.height}, ${this.weight}, ${this.width}, ${this.type}`
    }

    set shipType(t){
        this.type = t;
    }
    
    set changeOwner(Owner){
        this._owner = Owner; 
    }

    get owner(){
        return this._owner;
    }
}


const fighterShip = new Ship (7, 10, 5, "fighter")
console.log(fighterShip)

const fishingShip = new Ship (3, 4, 6, "fishing")
console.log(fishingShip)

const achaaniiShip = new Ship (700, 100, 500, "achaanii")
console.log(achaaniiShip)

const swimmingShip = new Ship (70, 100, 50, "swimming")
console.log(swimmingShip)

console.log(fighterShip.activity)

console.log(achaaniiShip.info)






class Owner {
    constructor(name, address, phone){
        this.name=name;
        this.address=address;
        this.phone=phone;
    }
}

const me = new Owner("owner_Name", "UB", 88888889)
const company = new Owner("company_Name", "UB", 99999999)

console.log(me)
console.log(company)


swimmingShip.changeOwner=me
console.log(swimmingShip.owner.name)