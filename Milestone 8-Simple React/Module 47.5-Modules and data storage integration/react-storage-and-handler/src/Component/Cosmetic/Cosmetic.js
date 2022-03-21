import React from "react";
import { addToDb, deleteShoppingCartDb, removeFromDb } from "../utilities/fakedb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic; //destructuring

  const addToCart = (id) => {
    addToDb(id);
  };

  const addToCardWithParam = () => addToCart(id);

  const removeFromCart=id=>{
      removeFromDb(id);
  }

  const deleteShoppingCart=(id)=>{
      deleteShoppingCartDb(id);
  }

  return (
    <div className="product">
      <h2>Buy this:{name}</h2>
      <p>Only for: ${price}</p>
      <p>
        <small>it has id: {id}</small>
      </p>
      <button onClick={addToCardWithParam}>Add to Cart</button>
      <button onClick={() => addToCart(id)}>Add to Cart:ShortCut</button>
      <button onClick={() => removeFromCart(id)}>Remove</button>
      <button onClick={()=>deleteShoppingCart(id)}>Delate</button>
    </div>
  );
};

export default Cosmetic;