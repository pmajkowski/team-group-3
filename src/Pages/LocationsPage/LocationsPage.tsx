import UserNavigationList from "../../components/UserNavigation/UserNavigationList";
import NavigationList from "../../components/Navigation/NavigationList";
import LocationContainer from '../../components/Locations/LocationContainer'
import Footer from "../../components/footer/footer";

function LocationsPage(): JSX.Element {
  return (
    <div>
      <UserNavigationList />
      <NavigationList />
			<LocationContainer/>
      <Footer />
    </div>
  );
}

export default LocationsPage;
