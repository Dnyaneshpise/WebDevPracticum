import "./App.css";

import ShoppingList from "./shoppingList";

const data = [
  { item: "eggs", quantity: 12, completed: false },
  { item: "Mongo", quantity: 5, completed: true },
  { item: "berry", quantity: 7, completed: false },
  { item: "Orange", quantity: 2, completed: true },
];

function App() {
  return (
    <>

      <ShoppingList items={data} />
    </>
  );
}

export default App;
