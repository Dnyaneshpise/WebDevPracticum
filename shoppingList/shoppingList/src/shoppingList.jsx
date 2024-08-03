import { useState } from "react";
import ShoppingListItem from "../ShoppingListItem";

import {v4 as uuid } from "uuid"

import ShoppingListForm from "./shoppingListForm";

function ShoppingList() {

  const [items,setItems] = useState([{id:uuid(),product:"Banana",quantity:3},{id:uuid(),product:"Mango",quantity:13}]);
  
  const addItem=(item)=>{
    item.id=uuid();
    setItems(
      (currentItems)=>{
        return [
          ...currentItems,
          item,
        ]
      }
    )
  }

  return (
    <>
      <h1>Shopping List:</h1>
      <ul>
        {items.map((i) => (

          <li
          key={i.id}
          >{i.product} - {i.quantity}</li>
          // <ShoppingListItem 

          //  key={i.id}
          // {...i}


          // item={i.item}
          // quantity={i.quantity}
          // completed={i.completed}

          // />

        ))}
      </ul>
      
      <ShoppingListForm addItem={addItem}/>
    </>
  );
}

export default ShoppingList;

// const data = [
//   {item:'eggs',quantity:12,completed:false},
//   {item:'Mongo',quantity:5,completed:true},
//   {item:'berry',quantity:7,completed:false},
//   {item:'Orange',quantity:2,completed:true},
// ]
