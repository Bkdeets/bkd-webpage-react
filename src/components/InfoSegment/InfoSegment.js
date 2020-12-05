import React, { Fragment } from "react";
import "../../tailwind.output.css";

const InfoSegment = (props) => {
	return (
		<div className="w-full">
			<div
				id="top"
				className="w-full mx-auto px-8 pt-4 pb-8 flex flex-row flex-initial sm-max:px-0 "
			>
				{props.children}
			</div>
		</div>
	);
};

export default InfoSegment;
