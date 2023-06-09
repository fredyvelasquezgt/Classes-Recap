class Player {
    static description = "Player In Our Game";
    #score = 0;
    numLives = 10;
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.#secret();
    }
    static randomPlayer() { //solo existe en la clase por si misma
        return new Player("Andy", "Fredy",)
    }
    get fullName() {
        return `${this.first} ${this.last}`
    }
    get score() {
        return this.#score
    }

    set score(newScore) {
        if(newScore<0) {
            throw new Error("Score must be positive")
        }
        this.#score = newScore;
    }


    updateScore(newScore) {
        this.#score = newScore;
    }
    taunt(){
        console.log('booyah!')
    }
    loseLife() {
        this.numLives -=1;
    }
    #secret() {
        console.log('secret!!')
    }
}

//inheritance
class AdminPlayer extends Player {
        constructor(first, last, powers){
            super(first, last); //references the parent class Player constructor
            this.powers = powers;
        }
    isAdmin = true;
}

const admin = new AdminPlayer(["delete", "restore world"])

//const player1 = new Player("blue", "steele");
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1)
// console.log(player1.numLives)
// player1.loseLife();
// console.log(player1.numLives)
// console.log(player1.getScore())
// console.log(player1.updateScore(28))
// console.log(player1.getScore())

console.log(player1.score);
player1.score = 432;
console.log(player1.score)
// const player2 = new Player("charlie", "brown");
// console.log(player2);


