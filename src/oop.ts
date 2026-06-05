// OOP concepts in Typescript | 04

class Chai {
    flavour: string;
    price: number

    constructor(flavour: string, price: number){
        this.flavour = flavour;
        this.price = price;
    }
}

//------------------------------------------
// const masalaChai = new Chai('Ginger', 20)
// masalaChai.flavour = 'masala'

// class Chai2 {
//     flavour: string;
//     price: number

//     constructor(flavour: string, price: number){
//         this.flavour = flavour;
//         console.log(this)
//     }
// }

// const masalaChai2 = new Chai('Ginger')
// masalaChai.flavour = 'masala'


// access modifier

class Chai2 {
    public flavor: string = "masala"

    private secretIngredients = "cardomon"

    reveal() {
        return this.secretIngredients //ok
    }
}

class Shop {
    protected shopName = "chai corner";
}

class Branch extends Shop {
    getName() {
        return this.shopName //ok
    }
}

// new Branch().getName // you get method in suggestion

class Wallet {
    #balance = 100

    getBlance() {
        return this.#balance
    }
}

const w = new Wallet()
 

class Cup {
    readonly capacity: number = 250;

    constructor(capacity: number){
        this.capacity = capacity
    }
}

class ModernChai {
    private _sugar = 2;

    get sugar() {
        return this._sugar
    }
    set sugar(value: number){
        if(value > 5) throw new Error ("TOO SWEET");
        this._sugar = value;
    }
}
const c = new ModernChai();
c.sugar = 3;

class EkChai {
    static shopName = "chaicode caffe"

    constructor(public flavour: string){}
}
console.log(EkChai.shopName);


abstract class Drink{
    abstract make(): void
}
class MyChai extends Drink {
    make(){
        console.log("Brewing chai");
    }
}

class Heater{
    heat(){}
}
class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}