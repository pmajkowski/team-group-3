import React from "react";
import classes from './LocationNav.module.css'


export const LocationNav = ():JSX.Element => {
  return (
    <div className={classes.container}>
      <ul>
        <li>Gdynia</li>
        <li>Gdańsk</li>
        <li>Wejherowo</li>
  
      </ul>
    </div>
  );
};

