"use strict";
// class Player {
//     public readonly first: string;
//     public readonly last: string; //public: visibility readonly: cant change
//     private score: number =0; //solo es accesible dentro de la clase y no desde afuera
//     constructor(first: string, last: string) {
//         this.first = first;
//         this.last = last;
//     }
//     private secretMethod():void {
//         console.log('secret method')
//     }
// }
class Player {
    //private score: number =0; //solo es accesible dentro de la clase y no desde afuera
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log('secret method');
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}
//with protected I can access _score
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 9999;
    }
}
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
//con abstract no puedo crear instancias
//puedo definir metodos que deben de existir en las sub classes
//una interface solo describe la shape, pero la abstract es hibrida, tambien puede hacer cosas
// la abstract agrega funcionalidad
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log('hello!');
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("betty", "white", 95000);
console.log(betty.getPay());
const bill = new PartTimeEmployee("bill", "Billerson", 24, 1100);
console.log(bill.getPay());
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
const elton = new Player("elton", "steele", 121);
elton.fullName;
elton.score = 99;
