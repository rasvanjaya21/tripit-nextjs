import Image from "next/image";
function Admin() {
	return (
		<div className="h-full pr-10">
			<Image
				priority
				src={"/assets/demo.png"}
				height={1221}
				width={1534}
				alt=""
			/>
		</div>
	);
}

export default Admin;