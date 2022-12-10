import React from "react";
import './Countries.css'
const Country = (props) => {
  const { name, capital, region, flag, population } = props.country;
  const addCountry = props.handleClick;

  const style = {
    border: "1px solid red",
    margin: "4px",
    padding: "4px",
    borderRadius: "5px",
    textAlign: "center",
  };
  return (
    <div style={style}>
      <img style={{ height: "50px" }} src={flag} alt="" />
      <h3>this is {name}</h3>
      <p>{capital}</p>
      <p>{region}</p>
      <p>{population}</p>
      <button onClick={() => addCountry(props.country)}>add button</button>
    </div>
  );
};

export default Country;
