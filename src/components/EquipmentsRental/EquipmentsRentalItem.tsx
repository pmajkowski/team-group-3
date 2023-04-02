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
            <EquipmentDataD>
              <li>{name} </li>
              <li>
                Price: {price}zł/
                {rentalType}
              </li>
              <li>Availability: {availability === true ? "Yes" : "No"}</li>
              <li>{category}</li>
              <Button type="button" onClick={handleClick}>
                Details
              </Button>
            </EquipmentDataD>
          </SingleImageClassD>
        </SelectedImageOverlay>
      )}
      <SingleImageClass>
        <ImageEffectClass>
          <img src={src} alt={alt} />
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
