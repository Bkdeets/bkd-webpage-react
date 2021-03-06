import React, { Fragment } from "react";
import "../../tailwind.output.css";

import uncewTeal from "../../assets/uncwTeal.jpg";
import InfoSegment from "../InfoSegment/InfoSegment";
import TagList from "../TagList/TagList";

const Education = () => {
	return (
		<InfoSegment>
			<div className="flex flex-col bg-uncw-teal w-full mx-auto sm-max:rounded-none rounded-lg shadow-lg">
				<p className="mt-4 text-xl font-bold mx-16 mb-1 sm-max:mx-2">
					University of North Carolina at Wilmington
				</p>
				<TagList items={["Honors College"]}></TagList>
				<div className="px-8 pb-8 flex flex-col flex-1 sm-max:px-4">
					<div className="flex flex-row flex-1">
						<div className="w-full mx-auto">
							<img
								className="rounded h-auto w-1/3 mx-auto"
								src={uncewTeal}
							/>
						</div>
					</div>
				</div>
				<div className="mx-auto p-12 px-32 text-left bg-gray-300 rounded-b-lg sm-max:rounded-none w-full sm-max:px-4">
					<div className="flex justify-between w-3/4 mx-auto flex-wrap sm-max:w-full">
						<div className="mx-12 sm-max:mx-1 sm-max:text-center sm-max:mx-auto">
							<p className="font-bold mb-1">
								B.S. Computer Science
							</p>
							<p className="text-sm font-light m-1">
								Business Concentration
							</p>
							<p className="text-sm font-light m-1">Cum Laude</p>
						</div>
						<div className="mx-12 sm-max:mx-1 sm-max:text-center sm-max:mx-auto">
							<p className="font-bold mb-1">
								B.S. Business Administration
							</p>
							<p className="text-sm font-light m-1">
								Finance Concentration
							</p>
							<p className="text-sm font-light m-1">Cum Laude</p>
						</div>
					</div>
					<div className="mx-auto mt-4">
						<p>
							At UNCW I studied in the University Honors program
							and earned a two degrees, one in Computer Science
							and one in Business Administration - Finance. During
							my time in college I worked at the Technology
							Assistance Center, interned at Liquidnet in New York
							City, and thrived in the academic environment. I
							participated as a shortboarder on the Surf Team, and
							lead the Surf Club as the president my senior year
							after holding numerous officer positions.
						</p>
					</div>
				</div>
			</div>
		</InfoSegment>
	);
};

export default Education;
