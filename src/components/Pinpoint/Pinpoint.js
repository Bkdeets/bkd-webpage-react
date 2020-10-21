import React, { Fragment } from "react";
import "../../tailwind.output.css";

import pinpointOld from '../../assets/pinpointOld.png';
import pinpointNew from '../../assets/pinpointNew.png';

const Portfolio = () => {
	return (
		<div id="skills" className="w-full">
			<div
				id="top"
				className="w-full mx-auto px-8 pt-4 pb-32 flex flex-row flex-initial sm-max:px-0"
			>
				<div className="flex flex-col bg-salmon w-full mx-auto sm:rounded-md md:rounded-md ld:rounded-md">
                    <p className="mt-4 text-xl font-bold mx-16 mb-1">Pinpoint Surf</p>
                    <div className="flex flex-center mx-auto mb-4">
                        <p className="text-sm font-light px-2 mx-1 rounded bg-gray-400">React</p>
                        <p className="text-sm font-light px-2 mx-1 rounded bg-gray-400">JS</p>
                        <p className="text-sm font-light px-2 mx-1 rounded bg-gray-400">TailwindCSS</p>
                    </div>
					<div className="px-8 pb-8 flex flex-col flex-1">
                        <div className="flex flex-row flex-wrap justify-between">
                            <div className="w-1/2 p-2 sm-max:w-full">
                                <img className="rounded" src={pinpointOld} />
                                <p className="text-sm mt-1">Current</p>
                            </div>
                            <div className="w-1/2 p-2 sm-max:w-full">
                                <img className="rounded" src={pinpointNew} />
                                <p className="text-sm mt-1">New</p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto p-12 px-32 text-left bg-gray-300 rounded-b w-full sm-max:px-4">
                            <p>
                                I am currently working as a freelancer on converting pinpointsurf.com from a Jekyl site to a React application.
                                My areas of focus include increasing the performance of the application and creating a consistent design theme.
                                There is a substantial amount of wind, wave, and surf data that we need to sort and display without 
                                significant load times which requires efficient and intelligent manipulation of the data.
                                This is a work in progress and I plan on updating here.
                            </p>
                        </div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
