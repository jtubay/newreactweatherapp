(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),s=a.n(c),i=(a(14),a(1)),o=a.n(i),l=a(4),m=a(5),h=a(7),u=a(6),p=a(8);a(16);var d=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,e.error?r.a.createElement("div",{className:"alert alert-danger mx-5",role:"alert"},"Please Enter City and Country"):null),r.a.createElement("form",{onSubmit:e.loadweather},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-2"},r.a.createElement("input",{type:"text",className:"form-control",name:"city",autoComplete:"off",placeholder:"City"})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("input",{type:"text",className:"form-control",name:"country",autoComplete:"off",placeholder:"Country"})),r.a.createElement("div",{className:"col-md-3 mt-md-0 py-2 text-md-left"},r.a.createElement("button",{className:"btn btn-warning"},"Get Weather")))))},w=(a(17),a(18),function(e,t){if(e&&t)return r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("span",{className:"px-4"},e,"\xb0"),r.a.createElement("span",{className:"px-4"},t,"\xb0")))}),f=function(e){return r.a.createElement("div",{className:"container text-light"},r.a.createElement("div",{className:"cards pt-5"},r.a.createElement("h1",null,e.city),r.a.createElement("h5",null,r.a.createElement("i",{className:"wi ".concat(e.weatherIcon," display-1")})),e.temp_celsius?r.a.createElement("h1",{className:"py-2"},e.temp_celsius,"\xb0"):null,w(e.temp_min,e.temp_max),r.a.createElement("h4",{className:"py-3"},e.description)))},v=(a(19),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).getWeather=function(t){var a,n,r,c;return o.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(t.preventDefault(),a=t.target.elements.city.value,n=t.target.elements.country.value,!a||!n){s.next=15;break}return s.next=6,o.a.awrap(fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(n,"&appid=").concat("fe933f641e0c1a4f579c0970f5038d4c","\n      ")));case 6:return r=s.sent,s.next=9,o.a.awrap(r.json());case 9:c=s.sent,console.log(c),e.setState({city:"".concat(c.name,", ").concat(c.sys.country),celsius:e.calCelsius(c.main.temp),temp_max:e.calCelsius(c.main.temp_max),temp_min:e.calCelsius(c.main.temp_min),description:c.weather[0].description,error:!1}),e.get_WeatherIcon(e.weatherIcon,c.weather[0].id),s.next=16;break;case 15:e.setState({error:!0});case 16:case"end":return s.stop()}}))},e.state={city:void 0,country:void 0,icon:void 0,main:void 0,celsius:void 0,temp_max:void 0,temp_min:void 0,description:"",error:!1},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"calCelsius",value:function(e){return Math.floor(e-273.15)}},{key:"get_WeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<=232:this.setState({icon:this.weatherIcon.Thunderstorm});break;case t>=300&&t<=321:this.setState({icon:this.weatherIcon.Drizzle});break;case t>=500&&t<=531:this.setState({icon:this.weatherIcon.Rain});break;case t>=600&&t<=622:this.setState({icon:this.weatherIcon.Snow});break;case t>=701&&t<=781:this.setState({icon:this.weatherIcon.Atmosphere});break;case 800===t:this.setState({icon:this.weatherIcon.Clear});break;case t>=801&&t<=804:this.setState({icon:this.weatherIcon.Clouds});break;default:this.setState({icon:this.weatherIcon.Clouds})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{loadweather:this.getWeather,error:this.state.error}),r.a.createElement(f,{city:this.state.city,country:this.state.country,temp_celsius:this.state.celsius,temp_max:this.state.temp_max,temp_min:this.state.temp_min,description:this.state.description,weatherIcon:this.state.icon}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.864bb22c.chunk.js.map