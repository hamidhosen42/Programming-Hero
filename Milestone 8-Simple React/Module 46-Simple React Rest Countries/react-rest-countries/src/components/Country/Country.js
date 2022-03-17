import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name,flags, population, area, region } = props.country;
  return (
    <div className="country">
      <h2>Country Name: {name.common}</h2>
      <img src={flags.png} alt="" srcset="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Region: {region}</p>

      {/* <h2>Country Name: {props.country.name.common}</h2>
        <p>Population: {props.country.population}</p>
        <p>Area: {props.country.area}</p>
        <p>Region: {props.country.region}</p> */}
    </div>
  );
};

export default Country;