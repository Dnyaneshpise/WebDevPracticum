
function ShoppingListItem({item,quantity,completed}){

  const style={
    color: completed ? "grey" : "red",
    textDecoration: completed ? "line-through" : "none",
  }

  return (
    <li style={style}>
      {item} - {quantity}
    </li>
  )
}

export default ShoppingListItem;

{/* <li
  key={i.id}
  style={{
    color: i.completed ? "grey" : "red",
    textDecoration: i.completed ? "line-through" : "none",
  }}
>
  {i.item} - {i.quantity}
</li>; */}
