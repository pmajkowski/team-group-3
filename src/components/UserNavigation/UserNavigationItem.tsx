import { useNavigate } from "react-router-dom";
import Button from "../buttons/Button";
import "./UserNavigationItemStyle.css";
import { IconType } from "react-icons";
interface UserNavigationItemProps {
  linkName: string;
  link: string;
  ico: React.ReactElement<IconType>;
}

function UserNavigationItem({ linkName, link, ico }: UserNavigationItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <Button onClick={handleClick} userNavigation>
      <span className="icon">{ico}</span>
      {linkName}
    </Button>
  );
}

export default UserNavigationItem;
