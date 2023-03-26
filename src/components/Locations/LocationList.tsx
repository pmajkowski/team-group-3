import React from 'react'
import classes from '../Locations/LocationList.module.css'
import { LocationListItem } from './LocationListItem'

 export const LocationList = ():JSX.Element => {
  return (
    <div className={classes.container}>
      <LocationListItem/>
    </div>
  )
}
