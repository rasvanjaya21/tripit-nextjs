import {
	IoCalendarOutline,
	IoAirplaneOutline,
	IoBedOutline,
	IoCarOutline,
	IoBusinessOutline,
} from "react-icons/io5";

const sidebarMenu = [
	{
		id: 1,
		name: "All trips",
		route: "/admin/all-trips",
		icon: IoCalendarOutline,
	},
	{
		id: 2,
		name: "Travels",
		route: "/admin/travels",
		icon: IoAirplaneOutline,
	},
	{
		id: 3,
		name: "Rooms",
		route: "/admin/rooms",
		icon: IoBedOutline,
	},
	{
		id: 4,
		name: "Transport",
		route: "/admin/transport",
		icon: IoCarOutline,
	},
	{
		id: 5,
		name: "Attractions",
		route: "/admin/attractions",
		icon: IoBusinessOutline,
	},
];

export { sidebarMenu };