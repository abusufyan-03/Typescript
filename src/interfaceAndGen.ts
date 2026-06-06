// Interface and Generics in Typescript | 03

// Interface main goal is to shape data or object or define structure

interface Chai {
    flavor: string
    price: number
    milk?: boolean
}

const masala:Chai = {
    flavor: "masala",
    price: 30
}

interface Shop {
    readonly id: number
    name: string
}

const s: Shop = {id: 1, name: "sasuke's caffe"}
// s.id = 2 // get error cause it's readonly propery

interface DiscountCalculator{
    (price: number): number
}

const apply50: DiscountCalculator = (p) => p * 0.5

interface TeaMachine{
    start(): void;
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}

interface ChaiRatings {
    [flavor: string]: number
}
const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.5
}

interface User{
    name: string
}
interface User{
    age: number
}

const u: User = {
    name: "sasuke",
    age: 20
}

interface A {a: string}
interface B {b: string}

interface C extends A, B {}

// ------------Generics-----------------
// Generics are template which makes are code resusable

function wrapInArray<T>(item: T): T[]{
    return [item];
}

wrapInArray("Masala");
wrapInArray(42);
wrapInArray({flavour: "Ginger"});

function pair<A, B>(a: A, b: B): [A, B]{
    return [a, b];
}
pair("masala", 20);
pair("masala", {flavor: "Ginger"});

// interface generic

interface Box<T>{
    content: T
}
const number: Box<number> = {content: 10};
const numberBoxCup: Box<string> = {content: "10"}

interface ApiPromise<T>{
    status: number,
    data: T
}
const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}