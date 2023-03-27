import a1 from "../../img/equipments/excavator attachments/a1.jpeg"
import a2 from "../../img/equipments/excavator attachments/a2.jpeg"
import o1 from "../../img/equipments/general construction equipments/o1.jpeg"
import o2 from "../../img/equipments/general construction equipments/o2.jpeg"
import o3 from "../../img/equipments/general construction equipments/o3.jpeg"
import w1 from "../../img/equipments/high performance machines/w1.jpeg"
import w2 from "../../img/equipments/high performance machines/w2.jpeg"
import w3 from "../../img/equipments/high performance machines/w3.jpeg"
import w4 from "../../img/equipments/high performance machines/w4.jpeg"
import w5 from "../../img/equipments/high performance machines/w5.jpeg"
import t1 from "../../img/equipments/rail transport/t1.jpeg"
import t2 from "../../img/equipments/rail transport/t2.jpeg"
import zg1 from "../../img/equipments/rail welding/zg1.jpeg"
import z1 from "../../img/equipments/turnout installation/z1.jpeg"
import z2 from "../../img/equipments/turnout installation/z2.jpeg"
interface EquipmentsDetails {
    name:string,
    price:number,
    availability: boolean,
    src:string,
    alt:string
}

// export interface EquipmentImageItemProps {
//     equipmentImageItem:EquipmentImageItemDetails
// }

// export type EquipmentsDetailsAndItemDetails = EquipmentsDetails & EquipmentImageItemProps;

export function EquipmentsRentalItem(props:EquipmentsDetails) {
  return (
    <div>
        <img src={props.src} alt={props.alt}/>
    <div>
        Name: {props.name}<br/>
        Price: {props.price}zł<br/>
        Availability: {props.availability === true?"Tak":"Nie"}<br/>
    </div>
    </div>
  )
}
