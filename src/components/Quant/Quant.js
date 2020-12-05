import React, { Fragment } from "react";
import "../../tailwind.output.css";

import alpacaLogo from "../../assets/alpacaLogo.png";
import blueshiftLogo from "../../assets/blueshiftLogo.png";
import polygonApi from "../../assets/polygonApi.png";
import pythonLogo from "../../assets/pythonLogo.png";
import stockChart from "../../assets/stockChart.png";
import InfoSegment from "../InfoSegment/InfoSegment";
import TagList from "../TagList/TagList";

const Portfolio = () => {
	return (
		<InfoSegment>
			<div className="flex flex-col bg-teal w-full mx-auto sm-max:rounded-none rounded-lg shadow-lg">
				<p className="mt-4 text-xl font-bold mx-16 mb-1">
					Quantitative Investing
				</p>
                <TagList
					items={[
						"Python",
						"Zipline",
						"Heroku",
						"Alpaca"
					]}
				></TagList>
				<div className="px-24 pb-8 flex flex-col flex-1 sm-max:px-8">
					<div className="flex flex-row justify-center flex-wrap">
						<div className="w-1/2 flex flex-col flex-wrap sm-max:w-full sm-max:mx-auto sm-max:hidden">
							<div className="mb-2 flex px-2 pb-2 justify-end">
								<img
									className="rounded h-auto w-32 m-2"
									src={alpacaLogo}
								/>
								<img
									className="rounded h-auto w-32 m-2"
									src={blueshiftLogo}
								/>
							</div>
							<div className="mb-2 flex p-2 justify-end">
								<img
									className="rounded h-auto w-32 m-2"
									src={polygonApi}
								/>
								<img
									className="rounded h-auto w-32 m-2"
									src={pythonLogo}
								/>
							</div>
						</div>
						<div className="w-1/2 rounded sm-max:w-full sm-max:mx-auto">
							<img
								className="rounded sm-max:mx-auto"
								src={stockChart}
							/>
						</div>
					</div>
				</div>
				<div className="mx-auto p-12 px-32 text-left bg-gray-300 rounded-b-lg w-full sm-max:px-4">
					<p>
						One of my interests is stock trading and automated
						investing. I have developed multiple stock trading
						strategies and created backtesting frameworks to
						evaluate them. I use the Alpaca API to live trade my
						strategies once they pass various tests and the Polygon
						API to pull data. I am currently trading a simple
						trend-following strategy build using the Zipline package
						and backtested on the Blueshift platform. In my free
						time, I am making my custom trading framework more
						robust to accept a range of different strategy
						parameters that accept more than just price data. For
						example, I have a fully automated value investing
						strategy that pulls from company financials as well as
						stock price to determine relative and fair valuation.
					</p>
				</div>
			</div>
		</InfoSegment>
	);
};

export default Portfolio;
