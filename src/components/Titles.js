import React from "react";
import "./Titles.css";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
const Titles = (props) => {
	const handleClick = (e, value) => {
		props.changeMeasureSystem(value);
	};
	return (
		<div>
			<ToggleButtonGroup
				className="titles-toggleGroup"
				exclusive={true}
				onChange={handleClick}
				value={props.measureSystem}
				size="small">
				<ToggleButton className="Titles--ToggleButton" value="imperial">
					°F
				</ToggleButton>
				<ToggleButton value="metric">°C</ToggleButton>
			</ToggleButtonGroup>
		</div>
	);
};

export default Titles;
