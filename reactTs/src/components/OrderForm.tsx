import { useState } from "react"

interface OrderFormProp {
    OnSubmit(order: {name: string; cups: number}): void
}
export function OrderForm({OnSubmit}: OrderFormProp){

    const [name, SetName] = useState<string>("masala");
    const [cups, setCups] = useState<number>(1)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        OnSubmit({ name, cups });
    }
    return(
      
        <form onSubmit={handleSubmit}>
            <label>Chai Name</label>
            <input
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                SetName(e.target.value)
            }
            />
            <label>Cups</label>
            <input
            type="number"
            value={cups}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                setCups(Number(e.target.value) || 0)
            }
            />
            <button type="submit">Place your order</button>
        </form>
      
    )
}