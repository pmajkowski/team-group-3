import React from "react";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";
import "./SidebarNavigationItemStyle.css";
interface SidebarNavigationProps {
  linkName: string;
  link: string;
}

const SidebarNavigationItem: React.FC<SidebarNavigationProps> = ({
  link,
  linkName,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };
  return (
    <Button onClick={handleClick} sidebar>
      {linkName}
    </Button>
  );
};

export default SidebarNavigationItem;
