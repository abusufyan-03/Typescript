import type { Chai } from "../types.tsx"
import { ChaiCardTsx } from "./ChaiCard.tsx";

interface ChaiListProp{
    items: Chai[]
}
export function ChaiList({items}: ChaiListProp){
    return(
        <>
        {items.map((chai)=>(
            <ChaiCardTsx 
            key={chai.id}
            name={chai.name}
            price={chai.price}
            isSpecial={chai.price > 30}
            />
        ))}
        </>
    )
}