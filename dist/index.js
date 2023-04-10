"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log('secret method');
    }
}
const elton = new Player("elton", "steele");
elton.score;
