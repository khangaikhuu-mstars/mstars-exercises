class Ship{
    constructor( heigth, weigth, width, type,   ){
        this.heigth = heigth;
        this.weigth = weigth;
        this.width  = width;
        this.type   = type;
    }
   get swinning(){
        console.log('swinning')
    }
    get activity(){
        const today = new Date()
        return  `${this.type}  ${today}` 
    }
    get info(){
        return  ` this is heigth ${this.heigth} ship i have wigth ${this.weigth} i have width ${this.width}  i have ${this.type}`
    }
}

const figtherShip = new Ship(7,10, 20,'har')
// console.log(figtherShip)
// console.log(figtherShip.swinning)
console.log(figtherShip.activity)
figtherShip.type = "gazraar yvdag ship"
console.log(figtherShip)
const fishingShip = new Ship(5, 6, 7, "litle")
console.log(fishingShip)
console.log(fishingShip.swinning)
const tradingShip = new Ship( 20, 24 , 25 ,"big")
console.log(tradingShip)
console.log(tradingShip.swinning)
const piratesSHip = new Ship( 45, 55, 30, "zevsegtei")
console.log(piratesSHip)
console.log(piratesSHip.swinning)
const litleShip  =  new Ship( 3, 4, 5, "princes")
console.log(litleShip)
console.log(litleShip.swinning)
console.log(litleShip.activity)

console.log(litleShip.info)



