import React, { useEffect, useState } from "react";
import Display from "../Display/Display";
import Tablet from "../Table/Table";

const Watch = () => {
  const [step, setState] = useState(0);

  const increaseSteps = () => setState(step + 1);

  useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    <div style={{ border: "2px solid red", margin: "5px" }}>
      <h2>This is my smart watch</h2>
      <h3>My Current Step:{step}</h3>
      <button onClick={increaseSteps}>Loading....</button>
      <Display name="MD.HAMID HOSEN" steps={step}></Display>
      <Tablet></Tablet>
    </div>
  );
};

export default Watch;