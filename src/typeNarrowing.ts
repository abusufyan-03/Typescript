// Type narrowing & type guard | 10

function getChai(kind: string | number) {
    if(typeof kind === 'string'){
        return `Making ${kind} chai...`;
    }
    return `Chai order: ${kind}`;
}

function serveChai(msg?: string) {
    if(msg){
        return `serving ${msg}`;
    }
    return `serving default masaka chai`;
}

function orderChai(size: 'small' | 'medium' | 'large' | number){
    if(size === 'small') {
        return `small cutting chai...`;
    }
    if(size === 'medium' || size === 'large') {
        return `make extra chai`;
    }

    return `chai order #${size}`;
}

class KulhadChai{
    server(){
        return `Serving kulkhad chai`
    }
}
class Cutting{
    server(){
        return `Serving Cutting chai`
    }
}

function serve(chai: KulhadChai | Cutting){
    if(chai instanceof KulhadChai){
        return chai.server();
    }
}

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is ChaiOrder{
    return(
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}

function serverOrder(item: ChaiOrder | string) {
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }

    return `serving custom chai: ${item}`
}

type masalaChai = {type: 'masala'; spiceLevel: number};
type GingerChai = {type: 'ginger'; amount: number};
type ElaichiChai = {type: 'elaichi'; aroma: number};

type Chai = masalaChai | GingerChai | ElaichiChai

function MakeChai(order: Chai){
    switch (order.type){
        case "masala":
            return `Masala Chai`
            break;
        case "ginger":
            return `Ginger chai`
            break;
        case "elaichi":
            return `elaichi chai`;
            break;
    }
}

function brew(order: masalaChai | GingerChai ){
    if('spiceLevel' in order){
        //
    }
}

// function isStringArray(arr: unknown): arr is string []{

// }


