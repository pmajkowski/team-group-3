import React from "react";
import classes from "./LocationListItem.module.css";
// import r1 from "../../img/gallery/realizations/r1.jpg";
import Button from "../buttons/Button";




//1.stwórz poprawny interfejs zbieżny z danymi z JSON
//2. Stwórz kompontent LocationListItem z propsami z iterfjesu na wzór wzorca USA

interface LocationListItemInter{
  src:string,
  alt:string,
  street:string,
  phone:number
}



export const LocationListItem = (props:LocationListItemInter):JSX.Element => {
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
        <img src={props.src} alt={props.alt} className={classes.img} />
        <img src={props.src} alt={props.alt} className={classes.img} />
      </div>
      <Button>DIRECTIONS</Button>
    </>
  );
};
