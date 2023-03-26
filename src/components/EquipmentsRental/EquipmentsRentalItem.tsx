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
    <div>
    <div>
        Name: {props.name}<br/>
        Price: {props.price}zł<br/>
        Availability: {props.availability === true?"Tak":"Nie"}
    </div>
    </div>
  )
}
