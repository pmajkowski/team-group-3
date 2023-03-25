import Footer from "../../components/Footer/Footer";
import NavigationList from "../../components/Navigation/NavigationList";
import RealizationsList from "../../components/Realizations/RealizationsList";
import SidebarNavigationList from "../../components/SidebarNavigation/SidebarNavigationList";
import './RealizationsPage.css'

function RealizationsPage(): JSX.Element {
	return (
		<div>
		<NavigationList />
		<RealizationsList />
		<Footer />
		</div>
	)
}

export default RealizationsPage;
