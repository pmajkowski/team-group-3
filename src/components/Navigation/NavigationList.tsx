import NavigationItem from "./NavigationItem";

interface ListedNavigation {
	id: number;
	name: string;
	link: string;
}

const navigationList: ListedNavigation[] = [
	{
		id: 1,
		name: `ICON`,
		link: `/`,
	},
	{
		id: 2,
		name: `Equipment Rental`,
		link: `/equipment-rentals`,
	},
	{
		id: 3,
		name: `Equipments at work`,
		link: `//equip-at-work`,
	},
	{
		id: 4,
		name: `Realizations`,
		link: `/realizations`,
	},
	{
		id: 5,
		name: `Locations`,
		link: `/locations`,
	},
	{
		id: 6,
		name: `About`,
		link: `/about`,
	},
	{
		id: 7,
		name: `Forms & Downloads`,
		link: `/downloads`,
	},

];

function NavigationList() {
	const renderedNavigationList = navigationList.map((navigation) => {
		return (
			<NavigationItem
				key={navigation.id}
				linkName={navigation.name}
				link={navigation.link}
			/>
		);
	});
	return (
		<div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto my-12 flex-row gap-x-5">
			{renderedNavigationList}
		</div>
	);
}

export default NavigationList;
