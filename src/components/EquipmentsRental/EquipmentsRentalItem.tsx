import Button from "../buttons/Button";
import {
  EquipmentData,
  ImageEffectClass,
  SingleImageClass,
} from "./EquipmentsRentalItemStyled";
import { useState } from "react";
import {
  EquipmentDataD,
  SelectedImageOverlay,
  SingleImageClassD,
} from "./EquipmentsRentalItemDetailsStyled";

interface EquipmentsRentalItemProps {
  name: string;
  price: string;
  rentalType: string;
  availability: boolean;
  category: string;
  src: string;
  alt: string;
}

export function EquipmentsRentalItem({
  name,
  price,
  rentalType,
  availability,
  category,
  src,
  alt,
}: EquipmentsRentalItemProps) {
  const [openItemDetails, setOpenItemDetails] = useState<boolean>(false);

  const handleClick = () => {
    setOpenItemDetails(!openItemDetails);
  };

  return (
    <div>
      {openItemDetails && (
        <SelectedImageOverlay>
          <SingleImageClassD>
          <img src={src} alt={alt} />
            <EquipmentDataD>
              <li>{name} </li>
              <li>
                Price: {price}zł/
                {rentalType}
              </li>
              <li>Availability: {availability === true ? "Yes" : "No"}</li>
              <li>{category}</li>
              <Button 
          type="button" 
          onClick={handleClick}
          secondary>
            Add
          </Button>
              <Button type="button" onClick={handleClick}>
                Back
              </Button>
            </EquipmentDataD>
          </SingleImageClassD>
        </SelectedImageOverlay>
      )}
      <SingleImageClass>
        <ImageEffectClass>
          <img src={src} alt={alt} onClick={handleClick}/>
        </ImageEffectClass>
        <EquipmentData>
          <li>{name}</li>
          <li>
            Price: {price} zł/{rentalType}
          </li>
          <li>Availability: {availability ? "Yes" : "No"}</li>
          <li>{category}</li>
          <Button type="button" onClick={handleClick}>
            Details
          </Button>
        </EquipmentData>
      </SingleImageClass>
    </div>
  );
}
