import React from 'react';

class WeatherQuery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            state:'',
            city:'',
        };

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
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.state} onChange={this.handleStateChange} placeholder="City"></input>
                <input type="text" value={this.state.city} onChange={this.handleCityChange}placeholder="State"></input>
                <input type="submit" />
            </form>
        );
    }
}

export {WeatherQuery};