import { useState } from 'react';
import { SelectedImageOverlay, SingleBigImageClass, SingleImageClass } from './realizationsItemStyled';

export interface RealizationsItemDetailsProps {
    src: string;
    alt: string;
    onClick?:()=>void;
}


export function RealizationsItem(props:RealizationsItemDetailsProps): JSX.Element {
  const [openItemDetails, setOpenItemDetails] = useState<boolean>(false);

  const handleClick = () => {
    setOpenItemDetails(!openItemDetails);
  };
  return (
  <div>
    {openItemDetails && (
          <SelectedImageOverlay>
          <SingleBigImageClass >
              <img 
              src={props.src} 
              alt={props.alt}
              onClick={handleClick}
              />
          </SingleBigImageClass>
          </SelectedImageOverlay>
    )}
  <SingleImageClass>
    <img 
    alt={props.alt} 
    src={props.src} 
    onClick={handleClick}
    className="image-ef"/>
</SingleImageClass>
</div>)
}