import { datasFromAPI } from "@/lib/datas";
import { cn } from "@/lib/utils";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

function Featured({ name, tripImage, onClickPrev, onClickNext }) {
	return (
		<div
			className="bg-contain bg-no-repeat font-semibold rounded-2xl"
			style={{ backgroundImage: `url(${tripImage})` }}
		>
			<div className="p-10 pt-10 2xl:pt-14 ">
				<div className="pb-2 2xl:pb-5">Nearest trip</div>
				<div className="text-5xl 2xl:text-7xl font-bold pb-4 2xl:pb-12">
					{name}
				</div>
				<div className="flex gap-7 p-2 pt-0 text-xs 2xl:text-xl">
					<button
						disabled={name === datasFromAPI[0].name}
						className={cn(
							name === datasFromAPI[0].name
								? "bg-transparent"
								: "bg-white"
								, "p-2 2xl:p-4 rounded-full"
						)}
						onClick={onClickPrev}
					>
						<HiOutlineArrowLeft />
					</button>
					<button
						disabled={name === datasFromAPI[1].name}
						className={cn(
							name === datasFromAPI[1].name
								? "bg-transparent"
								: "bg-white"
								, "p-2 2xl:p-4 rounded-full"
						)}
						onClick={onClickNext}
					>
						<HiOutlineArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Featured;
