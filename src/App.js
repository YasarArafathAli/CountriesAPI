import './App.css';
import {useEffect, useState } from 'react';
import Card from './card';

function App() {
  const [errror, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

 

  const refresh = () => {
    console.log("refresh");
      fetch(`https://restcountries.eu/rest/v2/region/asia`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  };

  useEffect( refresh, [])

    

  if (errror) {
    return <div>Error: {errror.message}</div>;
  }
  else if (!isLoaded) {
    return <div>Loading...</div>;
  }
  else {
    return (
      <div>
        <button onClick={refresh}>Refresh</button>
        <div className = "cards">
        {items.map(item => (
          <Card key={item.callingCodes} country= {item}/>))}

        </div>
    </div>
    );
  }
}
export default App;
