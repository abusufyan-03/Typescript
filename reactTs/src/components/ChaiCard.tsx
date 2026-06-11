export function ChaiCard({name, price, isSpecial = false}) {
    return(
        <article>
            <h2>{name} {isSpecial && <span>⭐</span>} </h2>
            <p>{price}</p>
        </article>
    )
}

// above code is simply a jsx 

// now let's write in tsx, tsx is nothing but we just add type safety

interface ChaiCardProp {
    name: string;
    price: number;
    isSpecial?: boolean;
}
export function ChaiCardTsx({name, price, isSpecial = false}: ChaiCardProp) {
    return(
        <article>
            <h2>{name} {isSpecial && <span>⭐</span>} </h2>
            <p>{price}</p>
        </article>
    )
}