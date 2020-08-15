let ApiManager = (function(){
    return {
        /**
         * returns a promise which will have a json value with weather info related to input param.
         * 
         * use .then after calling this function to get response.
         * 
         * @param {city,state} param0 
         */
        getWeatherPromise: function cityAndStateApiCall({city,state,unit="imperial"}){
            let paragraph = '';
            let test = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=75685a105e4030cddbdf93dfd89f6fe9&units=${unit}`).then((res)=>{
                return res;
            }).then((htmlResponse)=> {
                return htmlResponse.body.getReader();
            }).then((reader)=>{
                return reader.read();
            }).then((readUint8Array)=>{
                for(let val of readUint8Array.value){
                    paragraph += String.fromCharCode(val);
                }
                return JSON.parse(paragraph);
            });
            return test;
        }
    }
})();

export {ApiManager};