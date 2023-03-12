import { useNavigate } from "react-router-dom";
import Button from "../buttons/Button";

interface NavigationItemProps {
	linkName: string;
	link: string;
}

function NavigationItem({ linkName, link }: NavigationItemProps) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(link);
	};

	return <Button onClick={handleClick}>{linkName}</Button>;
}

export default NavigationItem;
