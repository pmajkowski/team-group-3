import EquipmentsAtWorkList from "../../components/equipmentsAtWork/equipmentsAtWorkList";
import Footer from "../../components/footer/footer";
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
