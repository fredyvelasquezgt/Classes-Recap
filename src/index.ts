
class Player {
    public readonly first: string;
    public readonly last: string; //public: visibility readonly: cant change
    private score: number =0; //solo es accesible dentro de la clase y no desde afuera

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    private secretMethod():void {
        console.log('secret method')
    }
}

const elton = new Player("elton", "steele")

