
import { SingleImageClass } from './equipmentsAtWorkItemStyled'
export interface EquipmentsAtWorkItemProps {
    src: string,
    alt: string,
    onClick?:()=>void;
}
export function EquipmentsAtWorkItem(props:EquipmentsAtWorkItemProps) {
  return (
    <SingleImageClass>
        <img 
        alt={props.alt} 
        src={props.src}
        onClick={props.onClick}
        />
        </SingleImageClass>
  )
}
