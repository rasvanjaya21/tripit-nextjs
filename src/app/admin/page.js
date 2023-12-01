"use client";

import { Button } from "@/components/ui/button";
import { datasFromAPI } from "@/lib/datas";
import { useState } from "react";
import Link from "next/link";
import HeaderSearchBar from "@/components/header/header-search-bar";
import HeaderAccount from "@/components/header/header-account";
import Featured from "@/components/featured/featured";
import Chart from "@/components/chart/chart";
import Calendar from "@/components/calendar/calendar";

function Admin() {
	const [currentData, setCurrentData] = useState(datasFromAPI[0]);
	console.log(datasFromAPI);

	function prevPage() {
		setCurrentData(datasFromAPI[0]);
	}

	function nextPage() {
		setCurrentData(datasFromAPI[1]);
	}

	return (
		<div className="h-full w-full space-y-5">
			<div className="flex gap-5">
				<div className="flex h-fit w-10/12">
					<div className="flex flex-col justify-center border-b-[1px] border-[#27292c21] w-full h-20">
						<HeaderSearchBar />
					</div>
				</div>
				<div className="flex h-fit w-4/12">
					<div className="flex flex-col justify-center border-b-[1px] border-[#27292c21] w-full h-20">
						<HeaderAccount />
					</div>
				</div>
			</div>
			<div className="flex gap-5">
				<div className="flex flex-col h-fit w-10/12 gap-5">
					<div className="flex gap-6 w-full">
						<div className="w-8/12 h-fit">
							<Featured
								name={currentData.name}
								tripImage={currentData.tripImage}
								onClickPrev={(event) => {
									prevPage();
								}}
								onClickNext={nextPage}
							/>
						</div>
						<div className="w-4/12 h-fit">
							<Chart expensesImage={currentData.expensesImage} />
						</div>
					</div>
					<div className="flex gap-5 w-full">
						<div className="bg-pink-700 w-6/12 h-48">6</div>
						<div className="bg-pink-700 w-7/12 h-48">7</div>
						<div className="bg-pink-700 w-full h-48">8</div>
					</div>
				</div>
				<div className="h-fit w-4/12">
					<div className="w-full h-[532px]">
						<Calendar
							timelineMonth={currentData.timelineMonth}
							timelineDate={currentData.timelineDate}
							timelineSuggestedDate={currentData.timelineSuggestedDate}
							timelineRecommendedDate={currentData.timelineRecommendedDate}
						/>
					</div>
				</div>
			</div>
			<div className="flex gap-5">
				<div className="flex h-fit w-10/12 gap-5">
					<div className="bg-pink-700 w-2/5 h-[508px]">9</div>
					<div className="bg-pink-700 w-full h-[508px]">10</div>
				</div>
				<div className="bg-white h-fit w-4/12">
					<div className="bg-pink-700 w-full h-[508px]">11</div>
				</div>
			</div>
		</div>
	);
}

export default Admin;
