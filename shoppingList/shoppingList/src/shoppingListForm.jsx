import { useState } from "react";
// import "./shoppingList.css";

function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addItem(formData);
    setFormData({ product: "", quantity: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="shopping-list-form">
      <label htmlFor="product">Product Name</label>
      <input
        type="text"
        placeholder="Product name"
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
      />
      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        placeholder="1"
        name="quantity"
        id="quantity"
        onChange={handleChange}
        value={formData.quantity}
      />
      <button>Add item</button>
    </form>
  );
}

export default ShoppingListForm;
