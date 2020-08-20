import React, { Component } from "react";

export default class Weather extends Component {
	renderUnit() {
		let unit = undefined;

		if (this.props.measureSystem === "imperial") {
			unit = "°F";
		} else {
			unit = "°C";
		}

		return unit;
	}

	renderTemp() {
		let temp = undefined;
		//TODO add the tmep here from the props
		if (this.props.measureSystem === "imperial") {
			temp = this.props.weatherData.tempF;
		} else {
			temp = this.props.weatherData.tempC;
		}

		return temp;
	}
	render() {
		const system = this.props.measureSystem;

		return (
			<div>
				<h1>
					Location:{" "}
					{this.props.weatherData.country
						? this.props.weatherData.country
						: " - "}{" "}
					{this.props.weatherData.city
						? this.props.weatherData.city
						: " - "}{" "}
				</h1>
				<h1>
					Temp:
					{this.renderTemp()}
					{this.renderUnit()}
				</h1>
				<h1>
					{this.props.weatherData.desc
						? this.props.weatherData.desc
						: " - "}
				</h1>
				<h1>
					Humidity:
					{this.props.weatherData.humidity
						? this.props.weatherData.humidity
						: " - "}
				</h1>
			</div>
		);
	}
}
