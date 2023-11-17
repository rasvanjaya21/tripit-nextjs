import Image from "next/image";
function Weather() {
	return (
		<div className="bg-tripit h-52 rounded-2xl">
			<div className="flex flex-col p-6 h-full justify-between">
				<div className="flex justify-between">
					<div className="flex gap-5">
						<Image
							priority
							src={"/assets/weather-logo.svg"}
							height={55}
							width={55}
							alt=""
						/>
						<div>
							<div className="font-bold text-4xl">30°</div>
							<div className="flex gap-4 items-center font-semibold">
								<Image
									priority
									src={"/assets/location-icon.svg"}
									height={9}
									width={9}
									alt=""
								/>
								<div className="font-semibold text-sm text-[#1D85FF]">Rome</div>
							</div>
						</div>
					</div>
					<div>
						<Image
							priority
							src={"/assets/weather-menu-icon.svg"}
							height={19}
							width={4}
							alt=""
						/>
					</div>
				</div>
				<div className="grid grid-cols-5 place-items-center pt-6">
					<Image
						priority
						src={"/assets/weather-mo.svg"}
						height={15}
						width={20}
						alt=""
					/>
					<Image
						priority
						src={"/assets/weather-tu.svg"}
						height={15}
						width={20}
						alt=""
					/>
					<Image
						priority
						src={"/assets/weather-we.svg"}
						height={15}
						width={20}
						alt=""
					/>
					<Image
						priority
						src={"/assets/weather-th.svg"}
						height={15}
						width={20}
						alt=""
					/>
					<Image
						priority
						src={"/assets/weather-fr.svg"}
						height={15}
						width={20}
						alt=""
					/>
				</div>
				<div className="grid grid-cols-5 place-items-center">
					<div>31°</div>
					<div>29°</div>
					<div>33°</div>
					<div>28°</div>
					<div>32°</div>
				</div>
				<div className="grid grid-cols-5 place-items-center text-[#1D85FF]">
					<div>Mo</div>
					<div>Tu</div>
					<div>We</div>
					<div>Th</div>
					<div>Fr</div>
				</div>
			</div>
		</div>
	);
}

export default Weather;