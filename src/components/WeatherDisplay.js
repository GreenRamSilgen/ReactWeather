import React from 'react';

class WeatherDisplay extends React.Component{

    render(){
      return(<div>
        {JSON.stringify(this.props.weatherData)}
      </div>);
    }
}

export {WeatherDisplay};