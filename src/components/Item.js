import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setIncart] = useState(false)
  const itemsClass = inCart? "in-cart" : ""
  const btnClass = inCart? "remove":"add"
  

  function handleInCart(){
    setIncart(!inCart)
  }

  return (
    <li className={itemsClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={handleInCart}>{inCart? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
