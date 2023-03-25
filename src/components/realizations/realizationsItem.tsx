import './RealizationsItem.css'

export interface RealizationsItem {
    src: string;
    alt: string;
}
export interface RealizationsItemProps {
    realizationsItem: RealizationsItem
}

export function RealizationsItem(props:RealizationsItemProps): JSX.Element {
  return (
  <div className="single-image">
    <img alt={props.realizationsItem.alt} src={props.realizationsItem.src} className="image-ef"/>
</div>)
}