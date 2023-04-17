import React from 'react'
import classes from '../Locations/LocationList.module.css'
import { LocationListItem } from './LocationListItem'
// import LocationData from '../Data/LocationData.json'



//3. Pobierz dane z Json - ZROBIONE
//4. metodą map wygeneruj tyle komponentów LocationListItem ile masz w JSON obiektów

// interface LocationDataInter{

//       name:string,
//       city: string,
//       phone: number,
//       adress: [{ street: string}, { local: number }, { post: string }],
//       country: string,
//       open:string,
//       close:string
    
  
// }


// const dataLocation=JSON.parse('LocationData')

const LocationList = ():JSX.Element => {
  return (
    <div className={classes.container}>
      <LocationListItem
      src={''}
      alt={''}
      street={""}
      phone={2222}
      
      />
    </div>
  )
}

export default LocationList

