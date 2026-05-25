// Types and Interface

function makeChai(order: {type: string; sugar: number; storng: boolean}){
    console.log(order)
}

function serverChai(order: {type: string; sugar: number; storng: boolean}){
    console.log(order)
}

// what we can see above here is in both function same type are gettign use so it's better to write a type setpratly and then use it whereever you need to

type ChaiOrder = {
    type: string;
    sugar: number;
    storng: boolean
}

function makeChai2(order: ChaiOrder){
    console.log(order)
}

function serverChai2(order: ChaiOrder){
    console.log(order)
}
//.....................

// type TeaRecipe = {
//     water: number;
//     milk: number;
// }

// class MasalaChai implements TeaRecipe {
//     water = 100;
//     milk = 50;
// }

type TeaRecipe = {
    water: number;
    milk: number;
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}


interface CupSize {
    size: 'small' | 'large';
} 
class Chai implements CupSize{
    size: "small" | "large" = 'large'
}

// if we dealing with class then it better to use inteface

/* type Response = {ok: true} | {ok: false}
class myRes implements Response{
    ok: boolean = true
} */

// won't work we need to make interface


type TeaType = 'masala' | 'ginger' | 'lemon';

function orderChai(t: TeaType){
    console.log(t);
}

type BaseChai = {teaLeaves: number}
type Extra = {masal: number}

type MasalaChai2 = BaseChai & Extra

const cup: MasalaChai2 = {
    teaLeaves: 2,
    masal: 1
}

type User = {
    username: string
    bio?: string
}

const u1: User = {username: "Sasuke"}
const u2: User = {username: "Naruto", bio: "Hokage"}


type Config = {
    readonly appName: string
    version: 1
}
const cfg: Config = {
    appName: "Masterji",
    version: 1
}

// cfg.appName = "Chaicode" // can't set name in readonly 