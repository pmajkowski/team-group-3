import React from "react";
import Maps from "../Maps/Maps";
import classes from "./LocationContainer.module.css";
import { LocationImage } from "./LocationImage";
import LocationList from "./LocationList";

import SidebarNavigationList from "../SidebarNavigation/SidebarNavigationList";

const LocationContainer = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <SidebarNavigationList />
      </div>
      <div className={classes.right}>
        <LocationImage />
        <LocationList />
        <Maps />
      </div>
    </div>
  );
};

export default LocationContainer;
