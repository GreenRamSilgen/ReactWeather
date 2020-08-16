import React from "react";

class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.bgColor='';

    this.temperature = "-";
    this.loc = "-";
    this.humidity = "-";
    this.pressure = "-";

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
    console.log((Number(temperature) - 32) * (5 / 9));
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
      if (this.state.tempType === "F")
        this.temperature = data.main.temp + "° F";
      if (this.state.tempType === "C")
        this.temperature = this.farheniteToCelcius(data.main.temp) + "° C";
      if (this.state.tempType === "K")
        this.temperature = this.farheniteToKelvin(data.main.temp) + "° K";

      this.humidity = data.main.humidity;
      this.pressure = data.main.pressure;
      this.loc = data.name;
      this.bgColor = this.setBgColor(data.main.temp);
    }

    console.log(this.temperature);
    return (
      <div className="weatherDisplay">
        <div className="temperatureBlock">
          <div className={"temperature " + this.bgColor}>{this.temperature}</div>
          <div className="tempTypeBtns">
            <button className={"btn btn-outline-primary degBtn " + this.bgColor+ "Btn"} onClick={this.setTempType} value="F">
              F
            </button>
            <button className={"btn btn-outline-primary degBtn " + this.bgColor+ "Btn"} onClick={this.setTempType} value="C">
              C
            </button>
            <button className={"btn btn-outline-primary degBtn " + this.bgColor + "Btn"} onClick={this.setTempType} value="K">
              K
            </button>
          </div>
        </div>

        <div className="extraDataBlock">
          <div className="extraDataContent">
            <div className="exDataLoc">Location: {this.loc}</div>
            <div className="exDataHumid">Humidity: {this.humidity}</div>
            <div className="exDataPress">Pressure: {this.pressure}</div>
          </div>
        </div>
      </div>
    );
  }
}

export { WeatherDisplay };
