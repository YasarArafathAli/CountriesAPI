import React from 'react';
import "./card.css";
function Card(props) {
  

    return (
      <div className="cards-item">
        <div className="card-image">
          
          <img className={ props.country.name + 'flag'}  src={props.country.flag} alt={props.country.cioc + "flag"} width="fit-content" height ="200"></img></div>
        <div className="card-content">
          <div className="card-title"><h2>{props.country.name.toUpperCase()}</h2></div>
          <div className="card-details">
            <p><strong>Capital</strong> : {props.country.capital}</p>
            <p><strong>Region</strong> : {props.country.region}</p>
            <p><strong>Srb-region</strong> : {props.country.subregion}</p>
            <p><strong>Population</strong> : {props.country.population}</p>
            <p><strong>Borders</strong> : {props.country.borders.join()}</p>
            <p><strong>Languages</strong> : {props.country.languages.map(lang => lang.name).join()}</p>
          </div>
        </div>
      </div>
    )
  }


export default Card
