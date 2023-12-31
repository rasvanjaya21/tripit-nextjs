const datasFromAPI = [
	{
		name: "Rome",
		tripImage: "/assets/trip-rome.svg",
		expensesImage: "/assets/expenses-rome.svg",
		totalTravelDate: "5",
		startTravelDate: "01.09.2021",
		endTravelDate: "05.09.2021",
		endDestination: "🇮🇹 Italy",
		durationDestination: "2 h 25 min",
		mapImage: "/assets/map-rome.svg",
		todos: [
			{
				id: "1",
				taskName: "Elit est nibh cras phasellus scelerisque orci",
				assignee: "Artur",
				priority: "Medium",
			},
			{
				id: "2",
				taskName: "Urna nibh eget facilisis egestas mi",
				assignee: "Marta",
				priority: "Low",
			},
			{
				id: "3",
				taskName: "Enim tincidunt orci curabitur habitant",
				assignee: "Artur",
				priority: "Medium",
			},
			{
				id: "4",
				taskName: "Sed condimentum magnis dui bibendum",
				assignee: "Marta",
				priority: "High",
			},
			{
				id: "5",
				taskName: "Lorem ipsum dolor sit amet rome",
				assignee: "Marta",
				priority: "Low",
			},
		],
		timelineMonth: "September",
		timelineDate: "17",
		timelineSuggestedDate: ["18", "19", "20", "21", "22"],
		timelineRecommendedDate: "23",
		timelineImage: "/assets/timeline-rome.svg",
	},
	{
		name: "Santorini",
		tripImage: "/assets/trip-santorini.svg",
		expensesImage: "/assets/expenses-santorini.svg",
		totalTravelDate: "7",
		startTravelDate: "13.12.2021",
		endTravelDate: "22.12.2021",
		endDestination: "🇬🇷 Greece",
		durationDestination: "3 h 45 min",
		mapImage: "/assets/map-santorini.svg",
		todos: [
			{
				id: "1",
				taskName: "Vitae id lobortis neque adipiscing id enim viverra",
				assignee: "Artur",
				priority: "Medium",
				isSelected: false,
			},
			{
				id: "2",
				taskName: "Consequat viverra at sagittis nisl arcu amet",
				assignee: "Marta",
				priority: "High",
				isSelected: false,
			},
			{
				id: "3",
				taskName: "Diam imperdiet vitae venenatis ultrices tellus in",
				assignee: "Artur",
				priority: "Medium",
				isSelected: false,
			},
			{
				id: "4",
				taskName: "Vitae tellus nisl facilisi a dignissim quam morbi",
				assignee: "Marta",
				priority: "Low",
				isSelected: false,
			},
			{
				id: "5",
				taskName: "Lorem ipsum dolor sit amet santorini",
				assignee: "Marta",
				priority: "High",
			},
		],
		timelineMonth: "December",
		timelineDate: "13",
		timelineSuggestedDate: ["14", "15", "16", "17", "18", "19", "20", "21"],
		timelineRecommendedDate: "22",
		timelineImage: "/assets/timeline-santorini.svg",
	},
];

export { datasFromAPI };
