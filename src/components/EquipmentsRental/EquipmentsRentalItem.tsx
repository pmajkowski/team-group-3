import { EquipmentData, ImageEffectClass, SingleImageClass } from "./EquipmentRentalItemStyled"
interface EquipmentsDetails {
  name: string;
  price: number;
  rentalType: string;
  availability: boolean;
  category: string;
  src: string;
  alt: string;
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
  console.log(props.src);
  return (
    <SingleImageClass>
      <ImageEffectClass>
        <img src={props.src} alt={props.alt} />
      </ImageEffectClass>
      <EquipmentData>
        <li>{props.name} </li>
        <li>
          Price: {props.price}zł/{props.rentalType}
        </li>
        <li>Availability: {props.availability === true ? "Yes" : "No"}</li>
        <li>{props.category}</li>
      </EquipmentData>
    </SingleImageClass>
  );
}
