import React from "react";
import NavigationList from "../../components/Navigation/NavigationList";
import SidebarNavigationList from "../../components/SidebarNavigation/SidebarNavigationList";
import UserNavigationList from "../../components/UserNavigation/UserNavigationList";

function EquipmentRentalsPage(): JSX.Element {
  return (
    <div className="App">
      <UserNavigationList />
      <NavigationList />
      <SidebarNavigationList />;
    </div>
  );
}

export default EquipmentRentalsPage;
