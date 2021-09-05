import '../styles/App.css';
import {
  useEffect,
  useState
} from 'react';
import Card from './card';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  const  refresh = async () => {
   
  async function getProcessedArray(obj = {}) {
    let array = obj.borders;
    let narray = []
    try {
      for (var i in array) {
        let response = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${array[i]}?fields=name`
      );
        let data = await response.json();
        narray.push(data.name)
      }
    } catch (e) {
      console.log(e)
    }
    return narray
  }
    console.log("refresh");
    let result = await fetch("https://restcountries.eu/rest/v2/region/asia?fields=name;capital;flag;region;subregion;population;borders;languages;alpha2Code;cioc;callingcodes");
    result = await result.json()
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