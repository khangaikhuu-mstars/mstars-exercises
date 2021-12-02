
// [
    class Ship {
        constructor(h, w, tp, wt,) {
            this.height = h;
            this.width = w;
            this.type = tp;
            this.weight = wt;
        }
        get status() {
            console.log('Status:');
            console.log('active');
            console.log('roaming');
            console.log('swimming');
            console.log('--------');
        };
        get activity() {
            const today = new Date;
            return today;
        }
        get info(){
            return console.log(`
                    This is a ${this.type} ship.
                    Height: ${this.height}
                    Weight: ${this.weight}
                    Width: ${this.width}
                    `)
        }
    }
// ]

const fighterShip = new Ship(20, 40, 'fighter', 10000);
console.log(fighterShip);

fighterShip.type = 'carrier'
// fighterShip.status;
fighterShip.info;
console.log(fighterShip.activity);

console.log(fighterShip);




const luxuryShip = new Ship(20, 40, 'luxury', 100000);
const normalShip = new Ship(30, 50, 'normal', 100000);
const carrierShip = new Ship(30, 50, 'carrier', 100000);
const inteligenceShip = new Ship(30, 50, 'uboat', 20000);
const fishingShip = new Ship(5, 20, 'fishing', 1000);

// const ships = [fighterShip, normalShip, carrierShip, inteligenceShip, fishingShip];
// console.log(ships);
