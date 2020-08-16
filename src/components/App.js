import React from 'react';
import {ApiManager} from '../javascript/ApiManager';
import {WeatherDisplay} from './WeatherDisplay';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        state:'',
        city:'',
        data:'',
    };

    this.result  = '';

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleStateChange(event){
    this.setState({
        state: event.target.value,
    })
}

handleCityChange(event){
    this.setState({
        city: event.target.value,
    });
}

handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
    ApiManager.getWeatherCS({
      city: this.state.city,
      state: this.state.state,
    }).then((response)=>{
      console.log(response);
      this.setState({
        data: response,
        city: '',
        state:'',
      });
    });
}


  componentDidMount(){
    let geo = navigator.geolocation;
    geo.getCurrentPosition((location)=>{
      ApiManager.getWeatherCoord({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      }).then((response)=>{
        console.log(response);
        this.setState({
          data: response,
          city: '',
          state:'',
        });
      });
    });

    
  }

  render(){
    return (
      <div className="App">
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.state} onChange={this.handleStateChange} placeholder="City"></input>
                <input type="text" value={this.state.city} onChange={this.handleCityChange}placeholder="State"></input>
                <input type="submit" />
            </form>
        <WeatherDisplay weatherData={this.state.data}/>
      </div>
    );
  }
}

export default App;
