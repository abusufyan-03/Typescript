// Object discussion in Typescript | 07

const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true
}

let tea: {
    name: string;
    price: number;
    isHot: boolean;
}

tea = {
    name: "Ginger Tea",
    price: 20,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ['ginger', 'tea leaves']
}


type Cup = {size: string};
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup;

type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const chaiBrew: Brew = coffee


type User = {
    username: string;
    password: string
}

const u: User = {
    username: "Sasuke",
    password: '123' // mendatory
}

// split out data type

type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type order = {
    id: string;
    items: Item[]
    address: Address
}


type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (update: Partial<Chai>) => {
    console.log("Updating chai with", update);
}
updateChai({price: 25});
updateChai({isHot: false})
updateChai({})


type ChaiOrder = {
    name?: string;
    quantity?: number;
}

const placeOrder = (order: Required<ChaiOrder>) =>{
    console.log(order)
}
placeOrder({
    name: "Masala chai",
    quantity: 2
    // both are mendatory now
})

type Chai2 = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}
type BasicChaiInfo = Pick<Chai, 'name' | 'price'>;

const chaiInfo: BasicChaiInfo = {
    name: "lemon Tea",
    price: 30
}


type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string;
}
type PublicChai = Omit<Chai, 'secretIngredients'>;