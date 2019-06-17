import React from "react";

const Weather = (props) => (
  <div>
  {props.city &&
    <div>
     <p>Місцезнаходження: {props.city}, {props.country}</p>
     <p>Погода: {props.weather}</p>
     <p>Температура: {props.temp} °C</p>
    </div>
  }
  <p>{props.error}</p>
  </div>
);



export default Weather;
