import React from "react";
import { ApiManager } from "../javascript/ApiManager";
import { WeatherDisplay } from "./WeatherDisplay";
import "../cssFiles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "",
      city: "",
      data: "",
    };

    this.result = "";

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleStateChange(event) {
    this.setState({
      state: event.target.value,
    });
  }

  handleCityChange(event) {
    this.setState({
      city: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    ApiManager.getWeatherCS({
      city: this.state.city,
      state: this.state.state,
    }).then((response) => {
      if(response.cod !== "404")
      {
      this.setState({
        data: response,
        city: "",
        state: "",
      });
    }
    });
  }

  componentDidMount() {
    let geo = navigator.geolocation;
    geo.getCurrentPosition((location) => {
      ApiManager.getWeatherCoord({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      }).then((response) => {
        this.setState({
          data: response,
          city: "",
          state: "",
        });
      });
    });
  }

  render() {
    return (
      <div className="App">
    <header>React Weather</header>

      <div className="appSearch">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.state}
            onChange={this.handleStateChange}
            placeholder="City"
          ></input>
          <input
            type="text"
            value={this.state.city}
            onChange={this.handleCityChange}
            placeholder="State"
          ></input>
          <input type="submit" className="btn btn-success"/>
        </form>
        </div>
        <div className="appDisplay">
        <WeatherDisplay weatherData={this.state.data} />
        </div>
        
        <footer>

      <div className="foot">
        <a target="_blank" href="https://github.com/GreenRamSilgen"
          ><i
            className="fab fa-github-square fa-lg foot__icons"
            title="My Github"
          ></i
        ></a>
        <a
          target="_blank"
          href="https://github.com/GreenRamSilgen/ReactWeather"
          ><i className="fas fa-code fa-lg foot__icons" title="Source Code"></i
        ></a>
      </div>
    </footer>
      </div>
    );
  }
}

export default App;
