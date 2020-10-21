import React, { Fragment } from "react";
import "../../tailwind.output.css";

import alpacaLogo from '../../assets/alpacaLogo.png';
import blueshiftLogo from '../../assets/blueshiftLogo.png';
import polygonApi from '../../assets/polygonApi.png';
import pythonLogo from '../../assets/pythonLogo.png';
import stockChart from '../../assets/stockChart.png';

const Portfolio = () => {
	return (
		<div id="skills" className="w-full">
			<div
				id="top"
				className="w-full mx-auto px-8 pt-4 pb-32 flex flex-row flex-initial sm-max:px-0"
			>
				<div className="flex flex-col bg-teal w-full mx-auto sm:rounded-md md:rounded-md ld:rounded-md">
                    <p className="mt-4 text-xl font-bold mx-16 mb-1">Quantitative Investing</p>
                    <div className="flex flex-center mx-auto mb-4">
                        <p className="text-sm font-light px-2 mx-1 rounded bg-gray-400">Python</p>
                        <p className="text-sm font-light px-2 mx-1 rounded bg-gray-400">Zipline</p>
                        <p className="text-sm font-light px-2 mx-1 rounded bg-gray-400">Heroku</p>
                        <p className="text-sm font-light px-2 mx-1 rounded bg-gray-400">Alpaca</p>
                    </div>
					<div className="px-32 pb-8 flex flex-col flex-1">
                        <div className="flex flex-row justify-center">
                            <div className="w-1/2 m-2 flex flex-col">
                                <div className="mb-2 flex px-2 pb-2 justify-end">
                                    <img className="rounded h-auto w-32 m-2" src={alpacaLogo} />
                                    <img className="rounded h-auto w-32 m-2" src={blueshiftLogo} />
                                </div>
                                <div className="mb-2 flex p-2 justify-end">
                                    <img className="rounded h-auto w-32 m-2" src={polygonApi} />
                                    <img className="rounded h-auto w-32 m-2" src={pythonLogo} />
                                </div>
                            </div>
                            <div className="w-1/2 m-2 rounded">
                                <img className="rounded" src={stockChart} />
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto p-12 px-32 text-left bg-gray-300 rounded-b w-full sm-max:px-4">
                            <p>
                                One of my interests is stock trading and automated investing. I have developed multiple stock trading 
                                strategies and created backtesting frameworks to evaluate them. I use the Alpaca API to live trade
                                my strategies once they pass various tests and the Polygon API to pull data. I am currently trading a simple trend-following 
                                strategy build using the Zipline package and backtested on the Blueshift platform. In my
                                free time, I am making my custom trading framework more robust to accept a range of different
                                strategy parameters that accept more than just price data. For example, I have a fully automated value 
                                investing strategy that pulls from company financials as well as stock price to determine
                                relative and fair valuation.
                            </p>
                        </div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
