import React from 'react';
import "./card.css";
function Card(props) {

  const getCountryname = (code) => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
      .then(res => res.json())
      .then(data => {
      console.log(data);
    })
  }  

    return (
      <div className="cards-item">
        <div className="card-image">
          
          <img className={ props.country.alpha2Code + 'flag'}  src={props.country.flag} alt={props.country.cioc + "flag"} ></img></div>
        <div className="card-content">
          <div className="card-title"><h2>{props.country.name.toUpperCase()}</h2></div>
          <div className="card-details">
            <p><strong>Capital</strong> : {props.country.capital}</p>
            <p><strong>Region</strong> : {props.country.region}</p>
            <p><strong>Srb-region</strong> : {props.country.subregion}</p>
            <p><strong>Population</strong> : {props.country.population}</p>
            <p><strong>Borders</strong> : {props.country.borders.map(getCountryname)}</p>
            <p><strong>Languages</strong> : {props.country.languages.map(lang => lang.name).join()}</p>
          </div>
        </div>
      </div>
    )
  }


export default Card
