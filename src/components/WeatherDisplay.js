import React from "react";
import "../cssFiles/WeatherDisplay.css";
class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.bgColor = "";

    this.temperature = "-";
    this.loc = "-";
    this.humidity = "-";
    this.pressure = "-";
    this.high = "-";
    this.low = "-";

    this.state = {
      tempType: "F",
    };

    this.roundUp = this.roundUp.bind(this);
    this.farheniteToCelcius = this.farheniteToCelcius.bind(this);
    this.farheniteToKelvin = this.farheniteToKelvin.bind(this);
    this.setTempType = this.setTempType.bind(this);
    this.setBgColor = this.setBgColor.bind(this);
  }

  roundUp(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }

  farheniteToCelcius(temperature) {
    return this.roundUp((Number(temperature) - 32) * (5 / 9));
  }

  farheniteToKelvin(temperature) {
    return this.roundUp(this.farheniteToCelcius(temperature) + 273.15);
  }

  setTemp(temperature) {
    if (this.state.tempType === "F") return temperature + "° F";
  }

  setTempType(event) {
    this.setState({
      tempType: event.target.value,
    });
  }

  setBgColor(temp) {
    let tempNum = Number(temp); //REPLACE WITH HEX?
    if (tempNum >= 100) return "clRed";
    if (tempNum >= 80) return "clOrange";
    if (tempNum >= 60) return "clYellow";
    if (tempNum >= 40) return "clGreen";
    if (tempNum >= 0) return "clBlue";
  }

  render() {
    let data = this.props.weatherData ? this.props.weatherData : "-";

    if (data !== "-") {
      if (this.state.tempType === "F") {
        this.temperature = data.main.temp + "° F";
        this.high = data.main.temp_max + "° F";
        this.low = data.main.temp_min + "° F";
      }
      if (this.state.tempType === "C") {
        this.temperature = this.farheniteToCelcius(data.main.temp) + "° C";
        this.high = this.farheniteToCelcius(data.main.temp_max) + "° C";
        this.low = this.farheniteToCelcius(data.main.temp_min) + "° C";
      }
      if (this.state.tempType === "K") {
        this.temperature = this.farheniteToKelvin(data.main.temp) + "° K";
        this.high = this.farheniteToKelvin(data.main.temp_max) + "° K";
        this.low = this.farheniteToKelvin(data.main.temp_min) + "° K";
      }
      this.humidity = data.main.humidity;
      this.pressure = data.main.pressure;
      this.loc = data.name;
      this.bgColor = this.setBgColor(data.main.temp);
    }

    return (
      <div className={data === "-" ? "hide" : "weatherDisplay"}>
        <div className="temperatureBlock">
          <div className={"temperature " + this.bgColor}>
            {this.temperature}
          </div>
          <div className="tempTypeBtns">
            <button
              className={
                "btn btn-outline-primary degBtn " + this.bgColor + "Btn"
              }
              onClick={this.setTempType}
              value="F"
            >
              F
            </button>
            <button
              className={
                "btn btn-outline-primary degBtn " + this.bgColor + "Btn"
              }
              onClick={this.setTempType}
              value="C"
            >
              C
            </button>
            <button
              className={
                "btn btn-outline-primary degBtn " + this.bgColor + "Btn"
              }
              onClick={this.setTempType}
              value="K"
            >
              K
            </button>
          </div>
        </div>

        <div className="extraDataBlock">
          <div className="extraDataContent">
            <div className="exDataLoc exData">Location: {this.loc}</div>
            <div className="exDataHigh exData">
              <img
                src="https://www.pikpng.com/pngl/m/30-302902_green-arrow-up-arrow-up-green-png-clipart.png"
                alt="daily high"
              ></img>
              High: {this.high}
            </div>
            <div className="exDataLow exData">
              <img
                src="https://www.pngitem.com/pimgs/m/252-2523331_transparent-downvote-png-red-arrow-down-png-png.png"
                alt="daily low"
              ></img>
              Low: {this.low}
            </div>
            <div className="exDataHumid exData">
              {" "}
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/humidity-forecast-hydration-precipitation-temperature-weather-38924.png"
                alt="humidity icon"
              ></img>
              Humidity: {this.humidity}
            </div>
            <div className="exDataPress exData">
              {" "}
              <img
                src="https://static.renishaw.net/media/thumbnails/240high/129c82e21f9c44e584c361b7a59f3ca1.jpg"
                alt="pressure icon"
              ></img>
              Pressure: {this.pressure}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { WeatherDisplay };
