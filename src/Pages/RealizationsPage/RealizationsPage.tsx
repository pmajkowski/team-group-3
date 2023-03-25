import Footer from "../../components/footer/footer";
import NavigationList from "../../components/Navigation/NavigationList";
import RealizationsList from "../../components/realizations/realizationsList";
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
