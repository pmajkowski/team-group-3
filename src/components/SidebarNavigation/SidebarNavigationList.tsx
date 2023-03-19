import React from "react";
import SidebarNavigationItem from "./SidebarNavigationItem";
import { useLocation } from "react-router-dom";
import {
	SidebardUsedEquipmentNavigation,
	SidebardDownloadsNavigation,
	SidebardLocationsNavigation,
	SidebardAboutNavigation,
	SidebardEquipmentRentalsNavigation,
} from "./NavigationContent";

const SidebarNavigationList: React.FC = () => {
	const { pathname } = useLocation();
	let navigationList = SidebardEquipmentRentalsNavigation;

	if (pathname.startsWith("/usedequip")) {
		navigationList = SidebardUsedEquipmentNavigation;
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
		<div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto my-12 flex-row gap-x-5">
			{renderedSidebardNavigationList}
		</div>
	);
};

export default SidebarNavigationList;
