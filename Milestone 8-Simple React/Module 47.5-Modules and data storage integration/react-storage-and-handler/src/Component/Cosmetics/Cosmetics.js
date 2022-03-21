import React, { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";
import { add, getTotal } from "../utilities/calculate";

const Cosmetics = () => {
  const first = 10;
  const second = 20;

  const total = add(first, second);

  // const cosmetics=[
  //     {id:1,name:"Hamid Hosen1",price:100},
  //     {id:2,name:"Hamid Hosen2",price:200},
  //     {id:3,name:"Hamid Hosen3",price:300},
  //     {id:4,name:"Hamid Hosen4",price:400},
  //     {id:5,name:"Hamid Hosen5",price:500},
  // ];

  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  const total1 = getTotal(cosmetics);

  return (
    <div>
      <h1>Welcome to my cosmetics store</h1>
      <p>Total:{total1}</p>

      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;