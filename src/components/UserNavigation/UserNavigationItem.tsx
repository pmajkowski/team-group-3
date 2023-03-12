// Importing the "useNavigate" hook from "react-router-dom" and the "Button" component from "../buttons/Button"
import { useNavigate } from "react-router-dom";
import Button from "../buttons/Button";

// Defining an interface for the props passed to the component
interface UserNavigationItemProps {
	linkName: string; // Name of the link to be displayed
	link: string; // The URL of the link
}

// Defining the functional component "UserNavigationItem" and destructuring its props object
function UserNavigationItem({ linkName, link }: UserNavigationItemProps) {
	// Using the "useNavigate" hook to get the navigation object
	const navigate = useNavigate();

	// Defining a callback function to handle the button click event
	const handleClick = () => {
		navigate(link); // Using the "navigate" function to navigate to the specified URL
	};

	// Returning a "Button" component with the specified link name and an "onClick" event listener that triggers the "handleClick" function when the button is clicked
	return <Button onClick={handleClick}>{linkName}</Button>;
}

// Exporting the "UserNavigationItem" component as the default export
export default UserNavigationItem;
