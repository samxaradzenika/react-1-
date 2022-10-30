//1--//

// const ages = [-2, -3, 6, 4];
// const positive= ages.filter(check)
// const initialValue = 0;
// const sumWithInitial = ages.reduce(
//    (previousValue, currentValue) => previousValue + currentValue,
//    initialValue
// );
// console.log(sumWithInitial);
// function check(positive) {
//    return positive >= 0;
// }
// console.log(positive);

// 2--//

// const names = [
//    'gio',
//    'nika',
//    'toko',
//    'nika',
//    'gio',
//    'tako',
//    'mariam',
//    'irakli',
//    'dato',
//    'irakli',
//    'nika',
//    'gio',
// ];
// const numberofnames = names.reduce((total, current) => {
//    total[current] ??= 0;
//    total[current]++;
//    return total;
// }, {});
// console.log(numberofnames);

// 3--//

// class car {
//     constructor(brand, model, speed = 50, motion = `this car is not moving`) {
//        this.brand = brand;
//        this.model = model;
//        this.speed = speed;
//        this.motion = motion;
//     }
//     check_motion = () => {
//        if (this.speed > 0) {
//           this.motion = `this car is moving`;
//        } else this.motion = `this car is not moving`;
//     };
//     status = () => {
//        return `car ${this.brand} ${this.model} is moving ${this.speed}km/h and the car status is ${this.motion}`;
//     };
//     accelerate = (speedup = 0) => {
//        if (speedup > 0) {
//           return this.status((this.speed += speedup));
//        }
//     };
//     brake = (speeddown = 0) => {
//        if (speeddown > this.speed) {
//           return `error`;
//        } else if (speeddown > 0) {
//           return this.status(this.speed -= speeddown);
//        }
//     };
//     emergency_brake = () => {
//        return this.status((this.speed = 0));
//     };
//  }
//  let newcar = new car(`chevrolet`, `camaro`, 200);
//  console.log(newcar.accelerate(100));
//  console.log(newcar.brake(60))
//  console.log(newcar.emergency_brake());

// 4---//

// function addAsync(x, y) {
//    return new Promise((resolve, reject) => {
//       if (
//          typeof x == `number` &&
//          typeof x !== `undefined` &&
//          typeof y == `number` &&
//          typeof y !== `undefined`
//       ) {
//          resolve(`Correct`);
//       } else {
//          reject(`error!`);
//       }
//    });
// }
// addAsync(2, 3)
//    .then((any) => console.log(any))
//    .catch((error) => console.log(error));
