interface EquipmentsDetails {
    name:string,
    price:number,
    availability: boolean,
    fot:string,
}
interface EquipmentImageItem {
    src:string,
    alt:string
}
interface EquipmentImageItemProps {
    equipmentImageItem:EquipmentImageItem
}
export default function EquipmentsRentalItem(props:EquipmentsDetails) {
  return (
    <div>{props.name}</div>
  )
}
