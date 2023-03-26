import React from "react";
import Maps from "../Maps/Maps";
import classes from "./LocationContainer.module.css";
import { LocationImage } from "./LocationImage";
import { LocationList } from "./LocationList";
import { LocationNav } from "./LocationNav";

const LocationContainer = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <LocationNav />
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
