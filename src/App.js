import React, { Component } from 'react';
import './App.css';
import Weather from './components/Weather';
import Form from './components/Form';
import Titles from './components/Titles';


const API_KEY = "7bc3838037ebc75e0ed597e8735542e6";

class App extends Component {
  state = {
    temperature : undefined,
    city : undefined,
    country : undefined,
    humidity : undefined,
    description : undefined,
    error : undefined,
    country : undefined,
  }
  getWeather = async(e) => {
    e.preventDefault();
    console.log(e.target.elements.city.value);
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`)
    const data = await api_call.json();
    console.log(data.weather[0].description);
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather = {this.getWeather}/>
                  <Weather 
                    temperature = {this.state.temperature}
                    humidity = {this.state.humidity}
                    city = {this.state.city}
                    country = {this.state.country}
                    description = {this.state.description}
                    error = {this.state.error} />
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
