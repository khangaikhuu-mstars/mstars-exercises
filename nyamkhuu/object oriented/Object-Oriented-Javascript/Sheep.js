class Sheep {
    constructor(weight, width, height, type) {
        this.weight = weight;
        this.height = height;
        this.width = width;
        this.type = type;
    };

    get swimming() {
        console.log('swimming');
    };
    get activity() {
        const today = new Date();
        return `${this.type} ${today}`
    };
    get info() {
        const today = new Date();

        return `This is ${this.type} sheep. 
         I have ${this.weight} ${this.height} ${this.width}. 
         I factored ${today} `
    };
    set sheeptype(t) {
        this.type = t;
    };

    set changeOwner(owner) {
        this._owner = owner;
    };
};


class Owner {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    };
    get nerAvah (){
        return this.name
    }
};
const huviHun = new Owner("Nergui", "ul medegdeg", "0001");
const baiguulga = new Owner("khangaihuu", "mstar", "0002");
console.log(huviHun);
console.log(baiguulga);



const fighterSheep = new Sheep(300, 400, 500, "Fighter");
const hunterSheep = new Sheep(100, 200, 300, "Hunter");
const sleepingSheep = new Sheep(10, 30, 30, "Sleep");
const foodSheep = new Sheep(10, 100, 100, "Food");
const defenderSheep = new Sheep(200, 300, 300, "Defender");

console.log(fighterSheep, hunterSheep, sleepingSheep, foodSheep, defenderSheep);


console.log(fighterSheep.swimming);
console.log(fighterSheep.activity);
console.log(fighterSheep.info);

fighterSheep.type = " pirate ";
console.log(fighterSheep)

fighterSheep.sheeptype = " attacker ";
console.log(fighterSheep)

fighterSheep.changeOwner = huviHun;
console.log(fighterSheep._owner.nerAvah)