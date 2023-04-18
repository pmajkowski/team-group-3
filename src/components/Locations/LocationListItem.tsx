import React from "react";
import classes from "./LocationListItem.module.css";
// import r1 from "../../img/gallery/realizations/r1.jpg";
import Button from "../buttons/Button";
import { LocationImageInter } from "./LocationList";




//1.stwórz poprawny interfejs zbieżny z danymi z JSON
//2. Stwórz kompontent LocationListItem z propsami z iterfjesu na wzór wzorca USA

export interface LocationDataInter{
  name:string,
  city: string,
  phone: number,
  adress: { street: string,  local: string ,  post: string },
  country: string,
  open:string,
  close:string
  
}





const LocationListItem = (props:LocationDataInter,props2:LocationImageInter):JSX.Element => {
  return (
    <>
      <h3>{props.name} - woj.pomorskie</h3>
      <div className={classes.container}>
        <div className={classes.adress}>
          <h5>{props.name}</h5>
          <p>
            <br/>
            {`${props.adress.street} ${props.adress.local}`}
            <br/>
            {props.adress.post}
          </p>
          <Button>DIRECTIONS</Button>
        </div>
        <div className={classes.image}>
          <img src={props2.src} alt={props2.alt} className={classes.img} />
          tu jest zdjęcie
        </div>
        <div className={classes.map}>
            tu jest mapa
        </div>
 
      </div>
    </>
  );
};
export default LocationListItem