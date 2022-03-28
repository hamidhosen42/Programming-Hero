import React from "react";
import Cart from "../Cart/Cart";

const CartGroup = () => {

  const products=[
      {id:1,name:"Laptop Pro",price:125000},
      {id:2,name:"Laptop Crow",price:125000},
      {id:3,name:"Laptop Grow",price:125000},
  ];

  return (
    <div>
      <h2>This is my cart</h2>
      <div className="card-group">
          {
              products.map((product)=><Cart
              key={product.id}
              product={product}
              ></Cart>)
          }
      </div>
    </div>
  );
};

export default CartGroup;