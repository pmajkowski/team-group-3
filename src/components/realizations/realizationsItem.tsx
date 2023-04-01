import { SingleImageClass } from './realizationsItemStyled';

export interface RealizationsItemDetailsProps {
    src: string;
    alt: string;
    onClick?:()=>void;
}


export function RealizationsItem(props:RealizationsItemDetailsProps): JSX.Element {
  return (
  <SingleImageClass>
    <img alt={props.alt} src={props.src} onClick={props.onClick}className="image-ef"/>
</SingleImageClass>)
}