import React from "react";
import NavigationList from "../../components/Navigation/NavigationList";
import RealizationsList from "../../components/realizations/realizationsList";
import UserNavigationList from "../../components/UserNavigation/UserNavigationList";

function RealizationsPage() {
  return (
    <div className="App">
      <UserNavigationList />
      <NavigationList />
      <RealizationsList />
    </div>
  );
}

export default RealizationsPage;
