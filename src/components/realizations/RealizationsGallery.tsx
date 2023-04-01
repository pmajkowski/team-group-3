import { SelectedImageOverlay, SingleBigImageClass } from "./RealizationsGalleryStyled";
import { RealizationsItemDetailsProps } from "./realizationsItem"

interface RealizationsGalleryProps {
    selectedItem: RealizationsItemDetailsProps;
    onClose:()=> void;
}
export function RealizationsGallery(props:RealizationsGalleryProps): JSX.Element {
  return (
    <SelectedImageOverlay>
    <SingleBigImageClass onClick={props.onClose}>
        <img src={props.selectedItem.src} alt={props.selectedItem.alt} />
    </SingleBigImageClass>
    </SelectedImageOverlay>
  )
}
