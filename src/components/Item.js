// import React , {useState} from "react";

// function Item({ name, category }) {
//   return (
//     <li className="">
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className="add">Add to Cart</button>
//     </li>
//   );
// }

// export default Item;

import React from "react";
import { useState}  from "react"
function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const shop = () => {
    setInCart(!inCart)
    
  }
  return (
    <li className= {inCart? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={shop}>{inCart? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
