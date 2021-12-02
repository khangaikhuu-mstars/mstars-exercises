// class Ship{
//     constructor(){
//         this.height= 10;
//         this.weight= 200;
//         this.width= 75;
//         this.type= "Fishing";
// }}

// class Ship{
//     constructor(){
//         this.height= height;
//         this.weight= weight;
//         this.width= width;
//         this.type= type;
// }}

// class Ship {
//   constructor(height, weight, width, type) {
//     this.height = height;
//     this.weight = weight;
//     this.width = width;
//     this.type = type;
//   }
//   swimming() {
//     console.log("swimming");
//   }
// }

// const fighterShip = new Ship(7, 10, 5, "Fighter");
// const fishingShip = new Ship(200, 400, 500, "Fishing");
// const customerShip = new Ship(67567, 435, 32456, "customerShip");
// const Yacht = new Ship(432, 2342, 5435, "Yacht");
// const militaryShip = new Ship(123, 124, 435, "militaryShip");

// console.log(fighterShip);
// console.log(fishingShip);
// console.log(customerShip);
// console.log(Yacht);
// console.log(militaryShip);
// console.log(fighterShip.swimming());
// console.log(fishingShip.swimming());
// console.log(customerShip.swimming());
// console.log(Yacht.swimming());
// console.log(militaryShip.swimming());

// fighterShip.type = "Master";
// fighterShip.height = 15;
// console.log(fighterShip);

class Ship {
  constructor(height, weight, width, type) {
    this.height = height;
    this.weight = weight;
    this.width = width;
    this.type = type;
  }
  get swimming() {
    console.log("swimming");
  }
  get activity() {
    const today = new Date();
    //   return today
    return ` ${this.type} ${today}`;
  }
  get info() {
    const today = new Date();
    const message = `This is <b>${this.type}</b> ship. My Height is <b>${this.height}</b>, Weight is<b>${this.weight}</b> and Width is <b>${this.width}</b>. Now Time is <b>${today}</b>`;
    return message;
  }
  set shipType(t) {
    this.type = t;
  }

  set changeOwner(Owner) {
    this._owner = Owner; /*backup property*/
  }
  get owner() {
    return this._owner;
  }
}

const fighterShip = new Ship(7, 10, 5, "Fighter");
const fishingShip = new Ship(200, 400, 500, "Fishing");
const customerShip = new Ship(67567, 435, 32456, "customerShip");
const Yacht = new Ship(432, 2342, 5435, "Yacht");
const militaryShip = new Ship(123, 124, 435, "militaryShip");

customerShip.shipType = "Pirate";
console.log(customerShip);
// console.log(fighterShip.swimming);
// console.log(fishingShip.swimming);
// console.log(customerShip.swimming);
// console.log(Yacht.swimming);
// console.log(militaryShip.swimming);

// console.log(Yacht.activity);

console.log(fishingShip.info);
document.getElementById("ship").innerHTML = fishingShip.info;

class Owner {
  constructor(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
  }

  name() {
    return this.name;
  }
}
const baatarkhuu = new Owner("Baatarkhuu", "Mongolia", "9876543456");
const company = new Owner("companyName", "Ulaanbaatar", "12345678543");
console.log(baatarkhuu);
console.log(company.name);
Yacht.changeOwner = baatarkhuu;

console.log(Yacht.owner.name);
