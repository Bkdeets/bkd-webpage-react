import React, { Fragment } from "react";
import "../../tailwind.output.css";

import uncewTeal from "../../assets/uncwTeal.jpg";

const Education = () => {
	return (
		<div id="skills" className="w-full">
			<div
				id="top"
				className="w-full mx-auto px-8 pt-4 pb-32 flex flex-row flex-initial"
			>
				<div className="flex flex-col bg-uncw-teal w-full mx-auto rounded-md">
					<p className="mt-4 text-xl font-bold mx-16 mb-1">University of North Carolina at Wilmington</p>
                    <div className="flex flex-center mx-auto mb-4">
                        <p className="text-sm font-light px-2 mx-1 rounded bg-gray-400">Honors College</p>
                    </div>
					<div className="px-8 pb-8 flex flex-col flex-1">
						<div className="flex flex-row flex-1">
							<div className="w-full mx-auto">
								<img
									className="rounded h-auto w-1/3 mx-auto"
									src={uncewTeal}
								/>
							</div>
						</div>
					</div>
					<div className="mx-auto p-12 px-32 text-left bg-gray-300 rounded-b w-full">
                        <div className="flex justify-between w-3/4 mx-auto flex-wrap">
                            <div className="mx-12">
                                <p className="font-bold mb-1">
                                    B.S. Computer Science
                                </p>
                                <p className="text-sm font-light m-1">Business Concentration</p>
                                <p className="text-sm font-light m-1">Cum Laude</p>
                            </div>
                            <div className="mx-12">
                                <p className="font-bold mb-1">
                                    B.S. Business Administration
                                </p>
                                <p className="text-sm font-light m-1">Finance Concentration</p>
                                <p className="text-sm font-light m-1">Cum Laude</p>
                            </div>
                        </div>
                        <div className="mx-auto mt-4">
                            <p>
                                At UNCW I studied in the University Honors program and earned a double major in
                                Computer Science and Finance. During my time in college I worked at the Technology Assistance Center, 
                                interned at Liquidnet in New York City, and thrived in the academic environment. I participated as a shortboarder on the 
                                Surf Team, and lead the Surf Club as the president my senior year after holding numerous
                                officer positions.
                            </p>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
