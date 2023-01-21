//class is template of javascript object

// class Car {
//     constructor(name, model){
//         this.name = name;
//         this.model = model;
//     }
// }

// const car1 = new Car("Maruthi-Suzuki", '2022');
// console.log(car1.name);
// console.log(car1.model);

class Car {
    constructor(){
        this.name = "Maruthi Suzuki";
        this.year = 2006;
    }
}

const car1 = new Car();
console.log(car1.name);
console.log(car1.year);