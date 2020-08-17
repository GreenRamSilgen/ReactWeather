(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),s=a.n(i),c=(a(16),a(3)),o=a(4),l=a(1),h=a(6),u=a(5),m=a(2),p=a.n(m),d=a(8),f=a(7),g={getWeatherCS:function(){var e=Object(f.a)(p.a.mark((function e(t){var a,n,r,i,s,c,o,l,h,u,m;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.city,n=t.state,r=t.unit,i=void 0===r?"imperial":r,s="",e.next=4,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(n,"&appid=75685a105e4030cddbdf93dfd89f6fe9&units=").concat(i));case 4:return c=e.sent,e.next=7,c.body.getReader();case 7:return o=e.sent,e.next=10,o.read();case 10:l=e.sent,h=Object(d.a)(l.value);try{for(h.s();!(u=h.n()).done;)m=u.value,s+=String.fromCharCode(m)}catch(p){h.e(p)}finally{h.f()}return e.next=15,JSON.parse(s);case 15:return e.abrupt("return",e.sent);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getWeatherCoord:function(){var e=Object(f.a)(p.a.mark((function e(t){var a,n,r,i,s,c,o,l,h,u,m;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.lat,n=t.lon,r=t.unit,i=void 0===r?"imperial":r,s="",e.next=4,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(n,"&appid=75685a105e4030cddbdf93dfd89f6fe9&units=").concat(i));case 4:return c=e.sent,e.next=7,c.body.getReader();case 7:return o=e.sent,e.next=10,o.read();case 10:l=e.sent,h=Object(d.a)(l.value);try{for(h.s();!(u=h.n()).done;)m=u.value,s+=String.fromCharCode(m)}catch(p){h.e(p)}finally{h.f()}return e.next=15,JSON.parse(s);case 15:return e.abrupt("return",e.sent);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=(a(18),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).bgColor="",n.temperature="-",n.loc="-",n.humidity="-",n.pressure="-",n.high="-",n.low="-",n.state={tempType:"F"},n.roundUp=n.roundUp.bind(Object(l.a)(n)),n.farheniteToCelcius=n.farheniteToCelcius.bind(Object(l.a)(n)),n.farheniteToKelvin=n.farheniteToKelvin.bind(Object(l.a)(n)),n.setTempType=n.setTempType.bind(Object(l.a)(n)),n.setBgColor=n.setBgColor.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"roundUp",value:function(e){return Math.round(100*(e+Number.EPSILON))/100}},{key:"farheniteToCelcius",value:function(e){return this.roundUp((Number(e)-32)*(5/9))}},{key:"farheniteToKelvin",value:function(e){return this.roundUp(this.farheniteToCelcius(e)+273.15)}},{key:"setTemp",value:function(e){if("F"===this.state.tempType)return e+"\xb0 F"}},{key:"setTempType",value:function(e){this.setState({tempType:e.target.value})}},{key:"setBgColor",value:function(e){var t=Number(e);return t>=100?"clRed":t>=80?"clOrange":t>=60?"clYellow":t>=40?"clGreen":t>=0?"clBlue":void 0}},{key:"render",value:function(){var e=this.props.weatherData?this.props.weatherData:"-";return"-"!==e&&("F"===this.state.tempType&&(this.temperature=e.main.temp+"\xb0 F",this.high=e.main.temp_max+"\xb0 F",this.low=e.main.temp_min+"\xb0 F"),"C"===this.state.tempType&&(this.temperature=this.farheniteToCelcius(e.main.temp)+"\xb0 C",this.high=this.farheniteToCelcius(e.main.temp_max)+"\xb0 C",this.low=this.farheniteToCelcius(e.main.temp_min)+"\xb0 C"),"K"===this.state.tempType&&(this.temperature=this.farheniteToKelvin(e.main.temp)+"\xb0 K",this.high=this.farheniteToKelvin(e.main.temp_max)+"\xb0 K",this.low=this.farheniteToKelvin(e.main.temp_min)+"\xb0 K"),this.humidity=e.main.humidity,this.pressure=e.main.pressure,this.loc=e.name,this.bgColor=this.setBgColor(e.main.temp)),r.a.createElement("div",{className:"-"===e?"hide":"weatherDisplay"},r.a.createElement("div",{className:"temperatureBlock"},r.a.createElement("div",{className:"temperature "+this.bgColor},this.temperature),r.a.createElement("div",{className:"tempTypeBtns"},r.a.createElement("button",{className:"btn btn-outline-primary degBtn "+this.bgColor+"Btn",onClick:this.setTempType,value:"F"},"F"),r.a.createElement("button",{className:"btn btn-outline-primary degBtn "+this.bgColor+"Btn",onClick:this.setTempType,value:"C"},"C"),r.a.createElement("button",{className:"btn btn-outline-primary degBtn "+this.bgColor+"Btn",onClick:this.setTempType,value:"K"},"K"))),r.a.createElement("div",{className:"extraDataBlock"},r.a.createElement("div",{className:"extraDataContent"},r.a.createElement("div",{className:"exDataLoc exData"},"Location: ",this.loc),r.a.createElement("div",{className:"exDataHigh exData"},r.a.createElement("img",{src:"https://www.pikpng.com/pngl/m/30-302902_green-arrow-up-arrow-up-green-png-clipart.png",alt:"daily high"}),"High: ",this.high),r.a.createElement("div",{className:"exDataLow exData"},r.a.createElement("img",{src:"https://www.pngitem.com/pimgs/m/252-2523331_transparent-downvote-png-red-arrow-down-png-png.png",alt:"daily low"}),"Low: ",this.low),r.a.createElement("div",{className:"exDataHumid exData"}," ",r.a.createElement("img",{src:"https://cdn.iconscout.com/icon/free/png-256/humidity-forecast-hydration-precipitation-temperature-weather-38924.png",alt:"humidity icon"}),"Humidity: ",this.humidity),r.a.createElement("div",{className:"exDataPress exData"}," ",r.a.createElement("img",{src:"https://static.renishaw.net/media/thumbnails/240high/129c82e21f9c44e584c361b7a59f3ca1.jpg",alt:"pressure icon"}),"Pressure: ",this.pressure))))}}]),a}(r.a.Component)),v=(a(19),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={state:"",city:"",data:""},n.result="",n.handleStateChange=n.handleStateChange.bind(Object(l.a)(n)),n.handleCityChange=n.handleCityChange.bind(Object(l.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"handleStateChange",value:function(e){this.setState({state:e.target.value})}},{key:"handleCityChange",value:function(e){this.setState({city:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.getWeatherCS({city:this.state.city,state:this.state.state}).then((function(e){"404"!==e.cod&&t.setState({data:e,city:"",state:""})}))}},{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){g.getWeatherCoord({lat:t.coords.latitude,lon:t.coords.longitude}).then((function(t){e.setState({data:t,city:"",state:""})}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,"React Weather"),r.a.createElement("div",{className:"appSearch"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.state,onChange:this.handleStateChange,placeholder:"City"}),r.a.createElement("input",{type:"text",value:this.state.city,onChange:this.handleCityChange,placeholder:"State"}),r.a.createElement("input",{type:"submit",className:"btn btn-success"}))),r.a.createElement("div",{className:"appDisplay"},r.a.createElement(b,{weatherData:this.state.data})),r.a.createElement("footer",null,r.a.createElement("div",{className:"foot"},r.a.createElement("a",{target:"_blank",href:"https://github.com/GreenRamSilgen"},r.a.createElement("i",{className:"fab fa-github-square fa-lg foot__icons",title:"My Github"})),r.a.createElement("a",{target:"_blank",href:"https://github.com/GreenRamSilgen/ReactWeather"},r.a.createElement("i",{className:"fas fa-code fa-lg foot__icons",title:"Source Code"})))))}}]),a}(r.a.Component));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.5c05d5d1.chunk.js.map