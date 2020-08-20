import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import cookie from "cookie_js";
import { Kelvin } from "node-temperature-converter";
require("dotenv").config();

class App extends React.Component {
	state = {
		measureSystem: "imperial",
		weatherData: {
			tempC: undefined,
			tempF: undefined,
			city: undefined,
			country: undefined,
			humidity: undefined,
			desc: undefined,
			error: undefined,
		},
	};

	changeMeasureSystem = (measureSystem) => {
		console.warn("🌡ystem Change to:" + measureSystem);
		this.setState({ measureSystem: measureSystem });
	};
	setCookie = (key, value) => {
		cookie.set(key, value);
	};
	getWeather = async (event) => {
		event.preventDefault();
		const city = event.target.city.value;
		const country = event.target.country.value;
		const api_call = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
		);

		const data = await api_call.json();

		console.log(data);

		const tempK = new Kelvin(data.main.temp);

		if (city && country) {
			this.setState({
				weatherData: {
					tempC: Math.round(tempK.toCelsius()),
					tempF: Math.round(tempK.toFahrenheit()),
					city: data.name,
					country: data.sys.country,
					humidity: data.main.humidity,
					desc: data.weather[0].description,
				},
			});
		} else {
			this.setState({
				weatherData: {
					temperature: undefined,
					city: undefined,
					country: undefined,
					humidity: undefined,
					desc: undefined,
					error: "not valid input",
				},
			});
		}
	};
	render() {
		return (
			<div>
				<Titles
					changeMeasureSystem={this.changeMeasureSystem}
					measureSystem={this.state.measureSystem}
				/>
				<Form getWeather={this.getWeather} />
				<Weather
					weatherData={this.state.weatherData}
					measureSystem={this.state.measureSystem}
				/>
			</div>
		);
	}
}

export default App;
