import ShoppingListItem from "../ShoppingListItem";

function ShoppingList({ items }) {
  return (
    <>
      <h1>Shopping List:</h1>
      <ul>
        {items.map((i) => (

          <ShoppingListItem 

           key={i.id}
          {...i}


          // item={i.item}
          // quantity={i.quantity}
          // completed={i.completed}

          />

        ))}
      </ul>
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
