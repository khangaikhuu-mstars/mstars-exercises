class Ship{
    constructor(height, weight, width, type, owner){
        height: this.height = height; 
        weight: this.weight = weight;
        width: this.width = width;
        type: this.type = type; 
    }
    get swimming(){
        console.log("swiming");
    }
    get activity(){
        const today = new Date();
        return `${this.type} ${today}`
    }

    get info(){
        const gogo = new DataTransfer();
        return `this is ${type} ship.i have ${this.height} ${this.weight} ${this.width}`
    }

    set shipType(t){
        this.type = t;
    }
    set changeOwner(owner){
        this._owner = owner;
    }
}

class Owner{
    constructor(name, address, phone){
        this.name = name;
        this.address = address;
        this.phone = phone;
    }



}
const mcs_Owner = new Owner ("mcs", "han-uul", "77778888")
    console.log(mcs_Owner);

const Tsedevee_Owner = new Owner ("Tsedevee", "Baynzurkh", "88060167")
    console.log(Tsedevee_Owner);


const fighter_Ship = new Ship (7, 10, 5, 'fighter');
    console.log(fighter_Ship);

const fishing_Ship = new Ship (8, 15, 10, 'fishing');
    console.log(fishing_Ship);

const transfort_Ship = new Ship (9, 20, 15, 'transfort');
    console.log(transfort_Ship);

const move_Ship = new Ship (10, 25, 20, 'move');
    console.log(move_Ship);

const damage_Ship = new Ship (11, 30, 25, 'damage');
    console.log(damage_Ship);

    fighter_Ship.swimming;
    console.log(fighter_Ship);
    fighter_Ship.changeOwner = mcs_Owner;
    console.log(fighter_Ship);
  