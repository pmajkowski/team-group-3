// Import the UserNavigationItem component from the "./UserNavigationItem" file
import UserNavigationItem from "./UserNavigationItem";

// Define an interface for the UserNavigation object, which has an id, name, and link property
interface UserNavigation {
	id: number;
	name: string;
	link: string;
}

// Define an array of UserNavigation objects with data for each navigation item
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

// Define a React component called UserNavigationList that renders a list of user navigation items
function UserNavigationList() {
	// Use the map method to iterate over the userNavigationList array and create a UserNavigationItem component for each item
	const renderedNavigationList = userNavigationList.map((userNavigation) => {
		// Pass the UserNavigationItem component the userNavigation object's id, name, and link properties as props
		return (
			<UserNavigationItem
				key={userNavigation.id}
				linkName={userNavigation.name}
				link={userNavigation.link}
			/>
		);
	});
	// Return a div that contains the renderedNavigationList of UserNavigationItem components
	return <div className="">{renderedNavigationList}</div>;
}

// Export the UserNavigationList component as the default export of the file
export default UserNavigationList;
