import React from "react";
import EquipmentsRentalList from "../../components/EquipmentsRental/EquipmentsRentalList";
import SidebarNavigationList from "../../components/SidebarNavigation/SidebarNavigationList";

function EquipmentRentalsPage() {
	return (<div>
	<SidebarNavigationList />
	<EquipmentsRentalList />
	</div>
	)
}

export default EquipmentRentalsPage;
