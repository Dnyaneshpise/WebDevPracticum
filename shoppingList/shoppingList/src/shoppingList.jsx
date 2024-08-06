import { useState } from "react";
import ShoppingListItem from "../ShoppingListItem";
import { v4 as uuid } from "uuid";
import ShoppingListForm from "./shoppingListForm";
// import "./shoppingList.css";

function ShoppingList() {
  const [items, setItems] = useState([
    { id: uuid(), product: "Banana", quantity: 3 },
    { id: uuid(), product: "Mango", quantity: 13 },
  ]);

  const addItem = (item) => {
    item.id = uuid();
    setItems((currentItems) => {
      return [...currentItems, item];
    });
  };

  return (
    <div className="shopping-list-container">
      <h1 className="shopping-list-header">Shopping List:</h1>
      <ul className="shopping-list-items">
        {items.map((i) => (
          <li key={i.id} className="shopping-list-item">
            {i.product} - {i.quantity}
          </li>
        ))}
      </ul>
      <ShoppingListForm addItem={addItem} />
    </div>
  );
}

export default ShoppingList;
