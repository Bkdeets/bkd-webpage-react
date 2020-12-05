import React, { useState } from "react";
import "../../tailwind.output.css";
import ItemsCarousel from "react-items-carousel";
import InfoSegment from "../InfoSegment/InfoSegment";
import TagList from "../TagList/TagList";

const Interests = () => {
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const chevronWidth = 40;

	let imageurls = [
		"https://i.imgur.com/V5qtQTN.jpg",
		"https://i.imgur.com/CkdCQ8L.jpg",
		"https://i.imgur.com/eGiOrUC.jpg",
		"https://i.imgur.com/f4dMCHw.jpg",
		"https://i.imgur.com/HmGJY2M.jpg",
		"https://i.imgur.com/Mo54OHM.jpg",
		"https://i.imgur.com/LkUIlKo.jpg",
		"https://i.imgur.com/ZwZE697.jpg",
		"https://i.imgur.com/34UWKki.jpg",
		"https://i.imgur.com/jOowcZt.jpg",
		"https://i.imgur.com/3w6KfJT.jpg",
		"https://i.imgur.com/2fP4MSh.jpg",
	];

	let images = imageurls.map((url) => {
		return <img class="h-auto w-full rounded mx-auto" src={url} />;
	});

	const rightChev = (
		<div className="mx-2">
			<svg
				className="stroke-current text-gray-400"
				xmlns="http://www.w3.org/2000/svg"
				width="40"
				height="40"
				viewBox="0 0 24 24"
				fill="none"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M5 12h13M12 5l7 7-7 7" />
			</svg>
		</div>
	);

	const leftChev = (
		<div className="mx-2">
			<svg
				className="stroke-current text-gray-400"
				xmlns="http://www.w3.org/2000/svg"
				width="40"
				height="40"
				viewBox="0 0 24 24"
				fill="none"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M19 12H6M12 5l-7 7 7 7" />
			</svg>
		</div>
	);

	return (
		<InfoSegment>
			<div className="flex flex-col bg-lavender w-full mx-auto sm-max:rounded-none rounded-lg shadow-lg">
				<p className="mt-4 text-xl font-bold mx-16 mb-1">Interests</p>
				<TagList
					items={[
						"Surfing",
						"Reading",
						"Soccer",
						"Learning",
						"Photography",
						"Travel"
					]}
				></TagList>
				<div className="px-8 pb-8 flex flex-col flex-1 w-7/12 mx-auto sm-max:px-4 sm-max:w-5/6">
					<ItemsCarousel
						requestToChangeActive={setActiveItemIndex}
						activeItemIndex={activeItemIndex}
						numberOfCards={1}
						gutter={20}
						leftChevron={leftChev}
						rightChevron={rightChev}
						outsideChevron
						chevronWidth={chevronWidth}
					>
						{images}
					</ItemsCarousel>
				</div>

				<div className="mx-auto p-12 px-32 text-left bg-gray-300 rounded-b-lg sm-max:rounded-none w-full sm-max:px-4">
					<p className="text-left mx-auto">
						I'm a huge surf nerd, sci-fi reader, soccer player, and
						more. I love learning new things and experiencing the
						world.
					</p>
				</div>
			</div>
		</InfoSegment>
	);
};

export default Interests;
