import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Countries/Country";
import Cart from "./components/Cart/Cart";

function App() {
  const [countries, setCountries] = useState([]);
  const [addCountry, setAddCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => 
        setCountries(data));
  }, []);

  const handleClick = (country) => {
    const newCountry = [...addCountry, country];
    setAddCountry(newCountry);
  };

  return (
    <div>
      <h1> add Country{countries.length}</h1>
    
      <Cart addCountry={addCountry}></Cart>

      {countries.map((country) => (
        <Country handleClick={handleClick} country={country}></Country>
      ))}
    </div>
  );
}

export default App;
