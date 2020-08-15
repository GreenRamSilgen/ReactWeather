import React from 'react';
import {ApiManager} from '../javascript/ApiManager'
class WeatherDisplay extends React.Component{
  componentDidMount(){
    ApiManager.getWeatherPromise({
      city:"Anaheim",
      state:"California",
    }).then((response)=>{
      //response = json
      console.log(response);
      console.log("ho");
    });
  }
  render(){
    return(<div>
      YO
    </div>);
  }
}
function App() {
  return (
    <div className="App">
      <WeatherDisplay/>
    </div>
  );
}

export default App;
