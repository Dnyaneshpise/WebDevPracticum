import "./App.css";

import ShoppingList from "./shoppingList";

const data = [
  { id:1, item: "eggs", quantity: 12, completed: false },
  { id:2, item: "Mongo", quantity: 5, completed: true },
  { id:3, item: "berry", quantity: 7, completed: false },
  { id:4, item: "Orange", quantity: 2, completed: true },
];

function App() {
  return (
    <>

      <ShoppingList items={data} />
    </>
  );
}

export default App;
