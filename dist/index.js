"use strict";
var _Player_score;
class Player {
    constructor(first, last) {
        _Player_score.set(this, 0);
        this.first = first;
        this.last = last;
    }
}
_Player_score = new WeakMap();
const elton = new Player("elton", "steele");
elton.score;
