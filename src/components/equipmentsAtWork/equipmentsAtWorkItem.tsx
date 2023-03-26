import './equipmentsAtWorkItem.css'
export interface EquipmentsAtWorkItem {
    src: string,
    alt: string
}
interface EquipmentsAtWorkItemProps {
    equipmentsAtWorkItem: EquipmentsAtWorkItem
}
export function EquipmentsAtWorkItem(props:EquipmentsAtWorkItemProps) {
  return (
    <div className="single-equipment">
        <img alt={props.equipmentsAtWorkItem.alt} src={props.equipmentsAtWorkItem.src} className="equipment-ef"/>
    </div>
  )
}
