// function in Typescript | 06
function makeChai(type: string, cups: number){
    console.log(`making ${cups} cups of ${type}`)
}
makeChai("masala", 2)

function getChaiPrice(): number{
    return 23
}

function makeOrder(order: string){
    if(!order) return null
    return order
}

function logChai(): void{
    console.log("Chai is ready");
}

function orderChai(type?: string){

}

function orderChai2(type: string = "masala"){

}

function createChai(order: {
    type: string;
    sugar: number;
    size: 'small' | 'large'
}): number {
    return 4
}