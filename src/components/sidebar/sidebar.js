"use client";

import { sidebarMenu } from "@/lib/constants";
import Image from "next/image";
import { useSelectedLayoutSegments } from "next/navigation";
import Weather from "@/components/weather/weather";

function SideBar() {
	const segment = useSelectedLayoutSegments();
	return (
		<div className="p-6 fixed h-screen text-black ">
			<div className="bg-white h-full rounded-2xl p-6 flex flex-col">
				<div className="flex items-center place-content-center gap-5 py-4">
					<Image
						priority
						src={"/assets/tripit-logo.svg"}
						height={42}
						width={36}
						alt="Follow us on Twitter"
					/>
					<div className="font-bold text-4xl">Tripit</div>
				</div>
				<div className="p-4">
					<div className="text-center text-white font-semibold rounded-2xl bg-[#346AFF] w-60 p-3">
						New Trip +
					</div>
				</div>
				{sidebarMenu.map((item) => (
					<div
						key={item.id}
						className="flex gap-4 p-4 items-center font-semibold"
					>
						<Image
							priority
							src={item.icon}
							height={24}
							width={24}
							alt="Follow us on Twitter"
						/>
						{item.name}
					</div>
				))}
				<div className="flex flex-col justify-end h-full">
					<Weather />
					<div className="flex gap-4 pt-4 items-center font-semibold">
						<Image
							priority
							src={"/assets/support-icon.svg"}
							height={20}
							width={20}
							alt="Follow us on Twitter"
						/>
						Support
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;