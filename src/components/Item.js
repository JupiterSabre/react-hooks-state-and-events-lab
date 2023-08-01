import React from "react";
import { useState } from "react";

function Item({ name, category }) {
const [virtCart, setVirtCart] = useState( false )
function toggleCart() {
  setVirtCart(!virtCart)
}

  return (
    <li className={virtCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleCart} className="add">
        {virtCart ? "Remove from cart" : "Add to cart"}
        Add to Cart</button>
    </li>
  );
}

export default Item;