import React from "react";
import classes from "../Locations/LocationList.module.css";
import LocationListItem from "./LocationListItem";
import LocationData from "../Data/LocationData.json";

//3. Pobierz dane z Json - ZROBIONE
//4. metodą map wygeneruj tyle komponentów LocationListItem ile masz w JSON obiektów
import l1 from '../../img/train.jpeg'
import l2 from '../../img/train_2.jpeg'
import l3 from '../../img/train_3.jpeg'

export const locationImages:LocationImageInter[]=[
  {src:l1,alt:'location 1'},
  {src:l2,alt:'location 2'},
  {src:l3,alt:'location 3'}
]

export interface LocationImageInter {
  src: string,
  alt: string,
  onClick?:()=>void;
}



const LocationList = () => {
  const mapLocationList = LocationData.map((location, index) => {
    return (
      <div className={classes.container} key={index}>
        <LocationListItem
          name={location.name}
          city={location.city}
          phone={Number(location.phone)}
          adress={{...location.adress}}
          country={location.country}
          open={location.open}
          close={location.close}
         
        />
      </div>
    );
  });
  return <div>{mapLocationList}</div>;
};

export default LocationList;
