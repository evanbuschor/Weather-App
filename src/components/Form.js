import React, { Component } from "react";

export default class Form extends Component {
	render() {
		console.log(process.env.REACT_APP_WEATHER_API_KEY);
		return (
			<div>
				<form onSubmit={this.props.getWeather}>
					<select type="text" name="city" placeholder="city">
						<option value="cincinnati">Cincinnati</option>
						<option value="columbus">Columbus</option>
						<option value="seattle">Seattle</option>
						<option value="fdsafdsafdsafdsafds">
							I Want You To Fail
						</option>
					</select>
					<select type="text" name="country" placeholder="country">
						<option value="US">US</option>
					</select>
					<button type="submit">Get Weather</button>
				</form>
				<form></form>
			</div>
		);
	}
}
