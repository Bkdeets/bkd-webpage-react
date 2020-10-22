import React, { Fragment } from "react";
import "../../tailwind.output.css";

import nCinoBanner from "../../assets/nCinoBanner.jpeg";

const Current = () => {
	return (
		<div id="skills" className="w-full">
			<div
				id="top"
				className="w-full mx-auto px-8 pt-4 pb-32 flex flex-row flex-initial sm-max:px-0 "
			>
				<div className="flex flex-col bg-yellow w-full mx-auto rounded-lg sm-max:rounded-none shadow-lg">
					<p className="mt-4 text-xl font-bold mx-16 mb-1">
						nCino - Associate Software Engineer
					</p>
					<div className="flex flex-center mx-auto mb-4">
						<p className="text-sm font-light px-2 mx-1 rounded bg-gray-400">
							Angular
						</p>
						<p className="text-sm font-light px-2 mx-1 rounded bg-gray-400">
							Apex
						</p>
						<p className="text-sm font-light px-2 mx-1 rounded bg-gray-400">
							LWC
						</p>
						<p className="text-sm font-light px-2 mx-1 rounded bg-gray-400">
							OOP
						</p>
						<p className="text-sm font-light px-2 mx-1 rounded bg-gray-400">
							Agile
						</p>
					</div>
					<div className="px-8 pb-8 flex flex-col flex-1">
						<div className="flex flex-row flex-1">
							<div className="w-full mx-auto">
								<img className="rounded h-auto w-5/6 mx-auto" src={nCinoBanner} />
							</div>
						</div>
					</div>
					<div className="mx-auto p-12 px-32 text-left bg-gray-300 rounded-b-lg sm-max:rounded-none w-full sm-max:px-4">
                        <p className="font-bold mb-1">2020 Release 1 - Commercial Pricing</p>
						<p className="pb-2 mb-2 text-left mx-auto">
							Planned and implemented a high-priority new pricing and
							profitability feature using Lightning Web Components
							and Apex.
						</p>

                        <p className="font-bold mb-1">2019 Release 2 - Commercial Portfolio</p>
						<p className="pb-2 mb-2 text-left mx-auto">
							Wrote high-quality software in Apex to facilitate the
							business logic requirements of the complex nCino
							data model. Used Angular to create and maintain
							seamless user experiences.
						</p>

                        <p className="font-bold mb-1">2019 Release 1 - Security Initiative </p>
						<p className="text-left mx-auto">
							Helped develop
							and maintain secure coding practices at nCino.
							Patched critical security flaws and upgraded
							insecure dependencies.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Current;
