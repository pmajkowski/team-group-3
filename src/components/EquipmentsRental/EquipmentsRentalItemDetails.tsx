import React from 'react'
import { EquipmentsDetails } from './EquipmentsRentalItem'
import { EquipmentData, SelectedImageOverlay, SingleImageClass } from './EquipmentsRentalItemDetailsStyled';
export interface EquipmentsRentalItemDetailsProps {
    selectedItem:EquipmentsDetails;
    onClose:()=>void;
}
export default function EquipmentsRentalItemDetails(props:EquipmentsRentalItemDetailsProps):JSX.Element {
  return (
    <SelectedImageOverlay onClick={props.onClose}>
    <SingleImageClass>
       <EquipmentData>
       <li>{props.selectedItem.firebaseData.name} </li>
        <li>
          Price: {props.selectedItem.firebaseData.price}zł/{props.selectedItem.firebaseData.rentalType}
        </li>
        <li>Availability: {props.selectedItem.firebaseData.availability === true ? "Yes" : "No"}</li>
        <li>{props.selectedItem.firebaseData.category}</li>
       </EquipmentData>
    </SingleImageClass>
    </SelectedImageOverlay>
  )
}
