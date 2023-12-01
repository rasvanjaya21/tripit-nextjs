import Image from "next/image";

function Map({ mapImage }) {
	return (
		<div
			className="bg-white h-full w-full rounded-2xl"
			style={{
				backgroundImage: `url(${mapImage})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		></div>
	);
}

export default Map;
