"use strict";
class Player {
    constructor(first, last) {
        this.score = 0; //solo es accesible dentro de la clase y no desde afuera
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log('secret method');
    }
}
const elton = new Player("elton", "steele");
