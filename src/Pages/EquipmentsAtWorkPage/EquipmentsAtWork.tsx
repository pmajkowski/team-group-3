import React from "react";
import EquipmentsAtWorkList from "../../components/equipmentsAtWork/equipmentsAtWorkList";
import NavigationList from "../../components/Navigation/NavigationList";
import SidebarNavigationList from "../../components/SidebarNavigation/SidebarNavigationList";
import UserNavigationList from "../../components/UserNavigation/UserNavigationList";

function EquipmentsAtWorkPage(): JSX.Element {
  return (
    <div className="App">
      <UserNavigationList />
      <NavigationList />
      <EquipmentsAtWorkList />;
    </div>
  );
}

export default EquipmentsAtWorkPage;
