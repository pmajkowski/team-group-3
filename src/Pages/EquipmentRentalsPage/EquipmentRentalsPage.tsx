import React from "react";
import EquipmentsRentalList from "../../components/EquipmentsRental/EquipmentsRentalList";
import Footer from "../../components/footer/footer";
import NavigationList from "../../components/Navigation/NavigationList";
import SidebarNavigationList from "../../components/SidebarNavigation/SidebarNavigationList";
import UserNavigationList from "../../components/UserNavigation/UserNavigationList";
import { Container } from "./EquipmentRentalsPageStyled";

function EquipmentRentalsPage() {
  return (
    <div className="App">
      <UserNavigationList />
      <NavigationList />
      <Container>
        <SidebarNavigationList />
        <EquipmentsRentalList />
      </Container>
      <Footer />
    </div>
  );
}

export default EquipmentRentalsPage;
