import Button from "../buttons/Button";
import {
  EquipmentData,
  ImageEffectClass,
  SingleImageClass,
  EquipmentDataD,
  SelectedImageOverlay,
  SingleImageClassD
} from "./EquipmentsRentalItemStyled";
import { useState } from "react";

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
  const [cat, setCat] = useState('');
  const getCategory = (event:any) =>{
    setCat(event.target.innerHTML)
  }

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
          <li
          onClick={getCategory}
          style={{ cursor: 'pointer' }}
          >{category}</li>
          <Button type="button" onClick={handleClick}>
            Details
          </Button>
        </EquipmentData>
      </SingleImageClass>
    </div>
  );
}
