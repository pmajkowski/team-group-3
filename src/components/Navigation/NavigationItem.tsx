import { useNavigate } from "react-router-dom";
import Button from "../buttons/Button";
import "./NavigationItemStyle.css";

interface NavigationItemProps {
  linkName: string;
  link: string;
}

function NavigationItem({ linkName, link }: NavigationItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className="navigation-item">
      <Button onClick={handleClick} navigation>
        {linkName}
      </Button>
    </div>
  );
}

export default NavigationItem;
