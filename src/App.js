import './App.css';
import {
  useEffect,
  useState
} from 'react';
import Card from './card';

function App() {
  // const [errror, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  const  refresh = async () => {
    
    async function getData(txt) {
    let response;
    try {
      response = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${txt}?fields=name`
      );
    } catch (error) {}
    if (response) {
      let data = await response.json()
      return data.name;
    } else {
      return null;
    }
  }

  async function getProcessedArray(obj = {}) {
    let array = obj.borders;
    let narray = []
    try {
      for (var i in array) {
        let data = await getData(array[i]);
        narray.push(data)
      }
    } catch (e) {
      console.log(e)
    }
    return narray
  }
console.log("refresh");
    let result = await fetch("https://restcountries.eu/rest/v2/region/asia?fields=name;capital;flag;region;subregion;population;borders;languages;alpha2Code;cioc;callingcodes")
    result = await result.json()
    // result = result.country.borders
    await Promise.all(result.map(async (count) => {
      let arr = await getProcessedArray(count)
      return count.borders = arr
    }))
    setIsLoaded(true);
    setItems(result);

  };

  useEffect(() => refresh(), [])





  if (!isLoaded) {
    return <div style={{color:"#f8f8f8"}}> Loading... </div>;
  } else {
    return (<div>
        <button onClick = {
          refresh
        }> Refresh </button>
        <div className = "cards"> {
          items.map(item => (
              <Card key = {item.callingCodes}country = {item}/>))}
      </div>
    </div>
            );
          }
        }
        export default App;