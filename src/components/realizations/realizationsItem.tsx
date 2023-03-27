import './realizationsItem.css'

export interface RealizationsItemDetails {
    src: string;
    alt: string;
}
export interface RealizationsItemProps {
    realizationsItemDetails: RealizationsItemDetails
}

export function RealizationsItem(props:RealizationsItemProps): JSX.Element {
  return (
  <div className="single-image">
    <img alt={props.realizationsItemDetails.alt} src={props.realizationsItemDetails.src} className="image-ef"/>
</div>)
}