import { EquipmentsAtWorkItemProps } from './equipmentsAtWorkItem'
import { SelectedImageOverlay, SingleBigImageClass } from './EquipmentsAtWorkGalleryStyled';
interface EquipmentsAtWorkGalleryProps {
selectedItem:EquipmentsAtWorkItemProps;
onClose:()=>void;
}
export function EquipmentsAtWorkGallery(props: EquipmentsAtWorkGalleryProps):JSX.Element {
  return (
    <SelectedImageOverlay onClick={props.onClose}>
        <SingleBigImageClass>
        <img 
        src={props.selectedItem.src}
        alt={props.selectedItem.alt}/>
        </SingleBigImageClass>
    </SelectedImageOverlay>
  )
}
