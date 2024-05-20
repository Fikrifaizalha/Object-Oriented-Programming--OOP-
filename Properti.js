// class Car {
//   constructor(brand, color, maxSpeed, chassisNumber) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.chassisNumber = chassisNumber;
//   }
// }

// const car1 = new Car("BMW", "red", 200, "b-1");
// const car2 = new Car("Audi", "blue", 220, "a-1");
// const car3 = new Car("BWM", "black", "250", "b-2");

// console.log(car1);
// console.log(car2);
// console.log(car3);

// Namun, adakalanya nilai properti juga bisa didefinisikan di dalam class itu sendiri.
// Contohnya, kita tidak ingin pengguna menentukan nomor rangka mobil secara mandiri,
//maka kita bisa memberi nilai properti chassisNumber langsung di dalam fungsi constructor.

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    // Set a random chassis number //
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
  }
}

const car1 = new Car("BMW", "red", 200);
const car2 = new Car("Audi", "blue", 220);
const car3 = new Car("BMW", "black", 250);

console.log(car1);
console.log(car2);
console.log(car3);
