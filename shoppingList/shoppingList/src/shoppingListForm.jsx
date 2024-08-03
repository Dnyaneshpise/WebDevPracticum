import { useState } from "react";

function ShoppingListForm({addItem}){
  
const [formData,setFormData]=useState({product:'',quantity:0})

const handelChange=(evt)=>{
  setFormData(
    (currentData)=>{
      return {
        ...currentData,
        [evt.target.name]:[evt.target.value]
      };
    }
  )
}

const handelSubmit=(evt)=>{
    evt.preventDefault();
    addItem(formData);
}

return(
  <form onSubmit={
    handelSubmit
  }>
    <label htmlFor="product">Product Name</label>
    <input 
    type="text" 
    placeholder="product name"
    name="product"
    id="product"
    onChange={handelChange}
    value={formData.product}
    />
    <label htmlFor="quantity">Quantity</label>
    <input 
    type="number" 
    placeholder="1"
    name="quantity"
    id="quantity"
    onChange={handelChange}
    value={formData.quantity}
    />
    <button>Add item</button>
  </form>
)
}

export default ShoppingListForm;
