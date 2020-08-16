let ApiManager = (function(){
    return {
        /**
         * returns a promise which will have a json value with weather info related to input param.
         * 
         * use .then after calling this function to get response.
         * 
         * @param {city,state} param0 
         */
        getWeatherCS:  async function cityAndStateApiCall({city,state,unit="imperial"}){
            let paragraph = '';
            let htmlResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=75685a105e4030cddbdf93dfd89f6fe9&units=${unit}`)
            let reader = await htmlResponse.body.getReader();
            let readUint8Array = await reader.read();
            for(let val of readUint8Array.value){
                paragraph += String.fromCharCode(val);
            }
            
            return await JSON.parse(paragraph);
        },


        
        getWeatherCoord:  async function longAndLatApiCall({lat,lon,unit="imperial"}){
            let paragraph = '';
            let htmlResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=75685a105e4030cddbdf93dfd89f6fe9&units=${unit}`)
            let reader = await htmlResponse.body.getReader();
            let readUint8Array = await reader.read();
            for(let val of readUint8Array.value){
                paragraph += String.fromCharCode(val);
            }
            
            return await JSON.parse(paragraph);
        }
    }
})();

export {ApiManager};