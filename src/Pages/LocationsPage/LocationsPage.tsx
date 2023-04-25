import React from "react";
import NavigationList from "../../components/Navigation/NavigationList";

import UserNavigationList from "../../components/UserNavigation/UserNavigationList";
import LocationContainer from "../../components/Locations/LocationContainer";

function LocationsPage(): JSX.Element {
  return (
    <div className="App">
      <UserNavigationList />
      <NavigationList />
      <LocationContainer />
    </div>
  );
}

export default LocationsPage;
