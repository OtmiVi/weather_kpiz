import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY ="b96b27425293439a787f70dfcc05bfe0";

class App extends React.Component{

  state = {
    temp:undefined,
    city:undefined,
    country:undefined,
    weather:undefined,
    error:undefined
  }

gettingWeather = async (e) => {
  e.preventDefault();
  var city = e.target.elements.city.value;

 try{
   const api_url = await
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
   const data = await api_url.json();
   console.log(data);

   this.setState({
     temp: data.main.temp,
     city: data.name,
     country: data.sys.country,
     weather: data.weather[0].description,
     error:undefined
   });
 }catch(err){
   this.setState({
     temp:undefined,
     city:undefined,
     country:undefined,
     weather:undefined,
     error: "Введіть інше місто"
   });
 }
}

  render(){
    return(
      <div className="wrapper">
       <div className = "main">
         <div className = "container">
           <div className = "row">
            <div className = "col-sm-5 info">
            <Info />
            </div>
            <div className = "col-sm-7 form">
            <Form weatherMethod = {this.gettingWeather}/>
            <Weather
            temp={ Math.round(this.state.temp - 273)}
            city={this.state.city}
            country={this.state.country}
            weather={this.state.weather}
            error={this.state.error}
           />
          </div>
          </div>
          </div>
         </div>
      </div>
    );
  }
}
export default App;
