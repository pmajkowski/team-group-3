import React from "react";
import classes from "./LocationListItem.module.css";
import r1 from "../../img/gallery/realizations/r1.jpg";
import Button from "../buttons/Button";

export const LocationListItem = () => {
  return (
    <>
      <h3>Sklep Gdynia</h3>
      <div className={classes.container}>
        <div className={classes.adress}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          officia numquam fuga? Expedita pariatur adipisci doloribus
          perspiciatis earum at mollitia totam voluptatum ad quas cum, possimus
          obcaecati, saepe eligendi dolores?
        </div>
        <img src={r1} alt="train" className={classes.img} />
        <img src={r1} alt="train" className={classes.img} />
      </div>
      <Button>DIRECTIONS</Button>
    </>
  );
};
