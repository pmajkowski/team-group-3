import { EquipmentData, ImageEffectClass, SingleImageClass } from "./EquipmentsRentalItemStyled"
import { DocumentData } from "firebase/firestore";
export interface EquipmentsDetails {
firebaseData:DocumentData
  onClick?:()=>void
}
export interface EquipmentImageItemDetails {
  src: string;
  alt: string;
}

// export interface EquipmentImageItemProps {
//     equipmentImageItem:EquipmentImageItemDetails
// }

// export type EquipmentsDetailsAndItemDetails = EquipmentsDetails & EquipmentImageItemProps;

export function EquipmentsRentalItem(props: EquipmentsDetails) {
  console.log(props.firebaseData.src);
  return (
    <SingleImageClass>
      <ImageEffectClass>
        <img 
        src={props.firebaseData.src} 
        alt={props.firebaseData.alt}
        onClick={props.onClick}
         />
      </ImageEffectClass>
      <EquipmentData>
        <li>{props.firebaseData.name} </li>
        <li>
          Price: {props.firebaseData.price}zł/{props.firebaseData.rentalType}
        </li>
        <li>Availability: {props.firebaseData.availability === true ? "Yes" : "No"}</li>
        <li>{props.firebaseData.category}</li>
      </EquipmentData>
    </SingleImageClass>
  );
}
