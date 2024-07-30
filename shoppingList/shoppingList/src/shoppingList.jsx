function ShoppingList({ items }) {
  return (
    <>
      <h1>Shopping List:</h1>
      <ul>
        {items.map((i) => (
          <li 
          style={{
            color: i.completed ? "grey" : "red",
            textDecoration: i.completed ? "line-through" : "none",
          }}

          >
            {i.item} - {i.quantity}
          </li>
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
