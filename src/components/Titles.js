import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
const Titles = (props) => {
	const handleClick = (e, value) => {
		props.changeMeasureSystem(value);
	};
	return (
		<div>
			<ToggleButtonGroup
				exclusive={true}
				onChange={handleClick}
				value={props.measureSystem}
				size="small">
				<ToggleButton value="imperial">°F</ToggleButton>
				<ToggleButton value="metric">°C</ToggleButton>
			</ToggleButtonGroup>
			<h1>Weather Finder</h1>
		</div>
	);
};

export default Titles;
