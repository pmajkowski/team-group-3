
import { useState } from 'react';
import { SingleImageClass, SelectedImageOverlay, SingleBigImageClass } from './equipmentsAtWorkItemStyled'
export interface EquipmentsAtWorkItemProps {
    src: string,
    alt: string,
    onClick?:()=>void;
}
export function EquipmentsAtWorkItem(props:EquipmentsAtWorkItemProps) {
  const [openItemDetails, setOpenItemDetails] = useState<boolean>(false);

  const handleClick = () => {
    setOpenItemDetails(!openItemDetails);
  };
  return (<div>
    {openItemDetails &&(
      <SelectedImageOverlay>
        <SingleBigImageClass>
        <img 
        src={props.src}
        alt={props.alt}
        onClick={handleClick}/>
        </SingleBigImageClass>
    </SelectedImageOverlay>
    )}
    <SingleImageClass>
        <img 
        alt={props.alt} 
        src={props.src}
        onClick={handleClick}
        />
        </SingleImageClass>
        </div>
  )
}
