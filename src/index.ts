
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

    constructor(public first: string, public last: string, protected _score: number) {

    }

    private secretMethod(): void {
        console.log('secret method')
    }

    get fullName(): string {
        return `${this.first} ${this.last}`
    }

    get score(): number {
        return this._score
    }

    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative")
        }
        this._score = newScore;
    }

}

//with protected I can access _score
class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore() {
        this._score = 9999;
    }
}


const elton = new Player("elton", "steele", 121)
elton.fullName;
elton.score = 99

