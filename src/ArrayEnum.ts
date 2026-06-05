// Array, enum and tuples in Typescript | 05
const chaiFlavour: string[] = ['masala', 'adrak']
const chaiPrice: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
    name: string;
    price: number;
}
const menu: Chai[] = [
    {name: "masala", price: 15},
    {name: 'Adrak', price: 15}
]

const cities: readonly string[] = ['delhi', "jaipur"]
// cities.push("pune") // can't push


const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]

let chaiTuple: [string, number];
chaiTuple = ['masala', 20]
// chaiTuple = [20, 'adrak'] // give error, order matter

let userInfo: [string, number, boolean?]
userInfo = ["hitesh", 100]
userInfo = ['hitesh', 100, true]


const location: readonly [number, number] = [28.66, 32.22]

const chaiItem: [name: string, price:number] = ['masala', 25]

enum Cupsize {
    SMALL,
    MEDIUM,
    LARGE
}
const size = Cupsize.LARGE


enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED // 102
}

enum ChaiType {
    MASALA = 'masala', 
    GINGER = 'ginger'
}
function makeChai(type: ChaiType) {
    console.log(`making: ${type}`)
}

makeChai(ChaiType.GINGER)
// makeChai("masala") //give error

enum RandomRnum {
    ID = 1,
    NAME = "chai"
}
// it will not give error but it's not recommend to use multiple data type inside enum only one data type 

const enum Sugar {
    LOW = 1,
    MEDIUM = 2,
    HIGHT = 3
}
const s = Sugar.HIGHT

let t: [string, number] = ['chai', 3 ]
t.push('extra'); // we can do this