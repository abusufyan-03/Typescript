import './App.css'
import { Card } from './components/Card.tsx';
import {ChaiCard, ChaiCardTsx } from './components/ChaiCard.tsx'
import { ChaiList } from './components/ChaiList.tsx';
import { Counter, CounterTsx } from './components/Counter.tsx'
import { OrderForm } from './components/OrderForm.tsx';

import type { Chai } from './types.ts';
const menu: Chai[] = [
  {id: 1, name: "Masala Chai", price: 25},
  {id: 2, name: "Ginger Chai", price: 50},
  {id: 3, name: "Lemon", price: 60}

]
function App() {

  return (
    <>
      <section id="center">
        
        <div>
          <h1>Get started</h1>
        </div>
        <ChaiCard
        name={`Sasuke`} 
        price="20"
        />
        <ChaiCardTsx 
        name='MacBook'
        price={80000}
        />
        <Counter/>

        <CounterTsx/>

        <div>
          <div>
            <ChaiList items={menu} />
          </div>
        </div>
        <div>
          <OrderForm 
          OnSubmit={(order) => (
            console.log("placed" ,order)
          )}/>
        </div>

        <div>
          <Card
          title="Chai aur typescript"
          footer={<button>Order now</button>}
          />
        </div>
      </section>
    </>
  )
}

export default App
