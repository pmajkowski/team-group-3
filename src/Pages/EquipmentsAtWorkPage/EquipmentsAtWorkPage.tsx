import EquipmentsAtWorkList from "../../components/EquipmentsAtWork/EquipmentsAtWorkList";
import Footer from "../../components/Footer/Footer";
import NavigationList from "../../components/Navigation/NavigationList";
import './EquipmentsAtWorkPage.css'

function EquipmentsAtWorkPage(): JSX.Element {
	return (
	<div>
	<NavigationList />
	<EquipmentsAtWorkList />
	<Footer />
	</div>
	)
}

export default EquipmentsAtWorkPage;
