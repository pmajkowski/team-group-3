import React from "react";
import classes from "./LocationImage.module.css";
import train from '../../img/train.jpeg'

export const LocationImage = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <img src={train} alt="train" className={classes.img} />
      <h1>Nasze sklepy</h1>
    </div>
  );
};
