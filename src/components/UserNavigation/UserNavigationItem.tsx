import { useNavigate } from "react-router-dom";
import Button from "../buttons/Button";

interface UserNavigationItemProps {
	linkName: string;
	link: string;
}

function UserNavigationItem({ linkName, link }: UserNavigationItemProps) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(link);
	};

	return <Button onClick={handleClick}>{linkName}</Button>;
}

export default UserNavigationItem;
