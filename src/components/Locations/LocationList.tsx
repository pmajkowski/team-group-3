import React from 'react'
import classes from '../Locations/LocationList.module.css'
import { LocationListItem } from './LocationListItem'
import LocationData from '../Data/LocationData.json'

console.log(LocationData);

//3. Pobierz dane z Json - ZROBIONE
//4. metodą map wygeneruj tyle komponentów LocationListItem ile masz w JSON obiektów

 export const LocationList = ():JSX.Element => {
  return (
    <div className={classes.container}>
      <LocationListItem/>
    </div>
  )
}
