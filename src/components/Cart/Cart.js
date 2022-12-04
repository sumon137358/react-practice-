import React from "react";
let population = 0;
const Cart = (props) => {
  const cart = props.addCountry;
  for (let x = 0; x < cart.length; x++) {
    const country = cart[x];
    population = population + country.population;
  }

  return (
    <div>
        <h2>add country:{props.addCountry.length}</h2>
      <h1>total population:{population}</h1>
    </div>
  );
};

export default Cart;
