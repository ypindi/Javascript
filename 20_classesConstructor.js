// Old Way
// var SpaceShuttle = function(targetPlanet) {
//     this.targetPlanet = targetPlanet;
// }

// var zeus = new SpaceShuttle('Jupiter');

// console.log(zeus.targetPlanet);

// Output
// Jupiter





// New Way
// class SpaceShuttle {
//     constructor(targetPlanet){
//         this.targetPlanet = targetPlanet;
//     }
// }

// var zeus = new SpaceShuttle("Saturn")
// console.log(zeus.targetPlanet)

// // Saturn







// function makeClass(){
//     class Vegetable{
//         constructor(name){
//             this.vegname = name;
//         }
//     };
//     return Vegetable;
// }

// const Vegetable = makeClass();
// const carrot = new Vegetable("Carrot");
// console.log(carrot.vegname);

// // Output
// // Carrot













function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp = temp;
        }

        get temper(){
            return this._temp;
        }

        set temper(temp){
            this._temp = temp;
        }
    };
    return Thermostat;
}

const Thermometer = makeClass();
const room = new Thermometer(35.7);
console.log(room._temp);

// Getter
let currentTemp = room.temper;
console.log(currentTemp);

// Setter
room.temper = 100;
console.log(room._temp);
console.log(currentTemp);

// Output
// 35.7
// 35.7
// 100
// 35.7