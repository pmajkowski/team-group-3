import { collection, query, getDocs, DocumentData } from "firebase/firestore";
import { firestore } from "../../firebase";
import {useState, useEffect} from "react"
import EquipmentsRentalItem from "./EquipmentsRentalItem";
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

export default function EquipmentsRentalList() {
    const [equipments, setEquipments] = useState<DocumentData[]>([]);
  const fetchAllEquipments = async () => {
    const queryAllEquipments = query(collection(firestore, "Equipments"));
    const allEquipmentsSnap = await getDocs(queryAllEquipments);
    const allEquipmentsData = allEquipmentsSnap.docs.map((doc) => doc.data());
    setEquipments(allEquipmentsData);
  };

  useEffect(() => {
    fetchAllEquipments();
  }, []);

  return (
    <div>
      <h1>EquipmentsRentalList</h1>
        {equipments.map((equipment) => (
          <EquipmentsRentalItem key={equipment.id} name={equipment.name} price={equipment.price} availability={equipment.availability} fot={equipment.fot}/>
        ))}
    </div>
  );
}
