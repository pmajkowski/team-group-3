import React from "react";
import SidebarNavigationItem from "./SidebarNavigationItem";
import { useLocation } from "react-router-dom";
import {
  SidebardEquipmentsAtWorkNavigation,
  SidebardDownloadsNavigation,
  SidebardLocationsNavigation,
  SidebardAboutNavigation,
  SidebardEquipmentRentalsNavigation,
} from "./NavigationContent";
import "./SidebarNavigationListStyle.css";

const SidebarNavigationList: React.FC = () => {
  const { pathname } = useLocation();
  let navigationList = SidebardEquipmentRentalsNavigation;

  if (pathname.startsWith("/equip-at-work")) {
    navigationList = SidebardEquipmentsAtWorkNavigation;
  }
  if (pathname.startsWith("/downloads")) {
    navigationList = SidebardDownloadsNavigation;
  }
  if (pathname.startsWith("/locations")) {
    navigationList = SidebardLocationsNavigation;
  }
  if (pathname.startsWith("/about")) {
    navigationList = SidebardAboutNavigation;
  }

  const renderedSidebardNavigationList = navigationList.map((navigation) => {
    return (
      <SidebarNavigationItem
        key={navigation.id}
        linkName={navigation.name}
        link={navigation.link}
      />
    );
  });
  return (
    <div className="navigation__list">{renderedSidebardNavigationList}</div>
  );
};

export default SidebarNavigationList;
