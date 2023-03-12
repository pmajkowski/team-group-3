import UserNavigationItem from "./UserNavigationItem";

interface UserNavigation {
	id: number;
	name: string;
	link: string;
}

const userNavigationList: UserNavigation[] = [
	{
		id: 1,
		name: `customerlogin`,
		link: `/login`,
	},
	{
		id: 2,
		name: `cart`,
		link: `/cart`,
	},
];

function UserNavigationList() {
	const renderedNavigationList = userNavigationList.map((userNavigation) => {
		return (
			<UserNavigationItem
				key={userNavigation.id}
				linkName={userNavigation.name}
				link={userNavigation.link}
			/>
		);
	});
	return (
		<div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto my-12 flex-row gap-x-5">
			{renderedNavigationList}
		</div>
	);
}

export default UserNavigationList;
