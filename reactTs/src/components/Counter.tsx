import { useState } from "react"
export function Counter(){
    const [count, setCount] = useState(0)
    return(
        <>
        <div>
            <p>Cups Ordered: {count} </p>
            <button
            onClick={() => setCount(count+ 1)}
            >order one more</button>
        </div>
        </>
    )
}
export function CounterTsx(){
    const [count, setCount] = useState<number>(0)
    return(
        <>
        <div>
            <p>Cups Ordered: {count} </p>
            <button
            onClick={() => setCount(count+ 1)}
            >order one more Tsx</button>
        </div>
        </>
    )
}