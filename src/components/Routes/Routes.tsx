import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import ARmotorsportsPage from "../../Pages/ARmotorsportsPage/ARmotorsportsPage";
import CartPage from "../../Pages/CartPage/CartPage";
import DownloadsPage from "../../Pages/DownloadsPage/DownloadsPage";
import EquipmentRentalsPage from "../../Pages/EquipmentRentalsPage/EquipmentRentalsPage";
import HomePage from "../../Pages/HomePage/HomePage";
import LocationsPage from "../../Pages/LocationsPage/LocationsPage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import UsedEquipmentPage from "../../Pages/UsedEquipmentPage/UsedEquipmentPage";

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/equipment-rentals" element={<EquipmentRentalsPage />} />
				<Route path="/usedequip" element={<UsedEquipmentPage />} />
				<Route path="/locations" element={<LocationsPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/downloads" element={<DownloadsPage />} />
				<Route path="/ar-motorsports" element={<ARmotorsportsPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/cart" element={<CartPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
