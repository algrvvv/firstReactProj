import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCosts/NewCost";
import React, { useState } from "react";
import data from './data.json'

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2023, 7, 22),
    name: 'Холодильник',
    price: 12000
  },
  {
    id: 'c2',
    date: new Date(2022, 8, 15),
    name: 'Стол',
    price: 4500
  },
  {
    id: 'c3',
    date: new Date(2021, 4, 2),
    name: 'Штаны',
    price: 1200
  },
  {
    id: 'c4',
    date: new Date(2023, 9, 6),
    name: 'Атомик харт',
    price: 4500
  },
  {
    id: 'c5',
    date: new Date(2023, 5, 29),
    name: 'Ноутбук',
    price: 45000
  },
]

function App() {

  console.log(data);

  const [cost, SetCost] = useState(INITIAL_COSTS)

  const addCostHandler = (newCostData) => {
    SetCost((prevCosts) => {
      return [newCostData, ...prevCosts] //обновление состояния через колбек
    })
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs cost={cost} />
    </div>
  );
}

export default App;
