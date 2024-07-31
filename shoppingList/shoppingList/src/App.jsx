import "./App.css";

import ShoppingList from "./shoppingList";
import PropertyList from "../PropertyList";


const data = [
  { id:1, item: "eggs", quantity: 12, completed: false },
  { id:2, item: "Mongo", quantity: 5, completed: true },
  { id:3, item: "berry", quantity: 7, completed: false },
  { id:4, item: "Orange", quantity: 2, completed: true },
];


const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
    <>

      <ShoppingList items={data} />
      <hr />
      <PropertyList properties={properties}/>
    </>
  );
}

export default App;
