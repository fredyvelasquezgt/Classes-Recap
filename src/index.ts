
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

    constructor(public first:string, public last: string, private _score: number) {

    }

    private secretMethod():void {
        console.log('secret method')
    }

    get fullName(): string {
        return `${this.first} ${this.last}`
    }

    get score():number{
        return this._score
    }
}


const elton = new Player("elton", "steele", 121)
elton.fullName;
elton.score;

