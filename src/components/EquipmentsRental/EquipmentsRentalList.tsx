import { collection, query, getDocs, DocumentData } from "firebase/firestore";
import { firestore } from "../../firebase";
import {useState, useEffect} from "react"
import {EquipmentsRentalItem} from "./EquipmentsRentalItem";


// const equipmentList: EquipmentImageItemDetails[] = [
//     {src: a1, alt: 'Equipment 1'},
//     {src: a2, alt: 'Equipment 2'},
//     {src: o1, alt: 'Equipment 3'},
//     {src: o2, alt: 'Equipment 4'},
//     {src: o3, alt: 'Equipment 5'},
//     {src: w1, alt: 'Equipment 6'},
//     {src: w2, alt: 'Equipment 7'},
//     {src: w3, alt: 'Equipment 8'},
//     {src: w4, alt: 'Equipment 9'},
//     {src: w5, alt: 'Equipment 10'},
//     {src: t1, alt: 'Equipment 11'},
//     {src: t2, alt: 'Equipment 12'},
//     {src: zg1, alt: 'Equipment 13'},
//     {src: z1, alt: 'Equipment 14'},
//     {src: z2, alt: 'Equipment 15'}
//   ];

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
        {equipments.map((equipment:DocumentData) => (
          <EquipmentsRentalItem 
          key={equipment.id} 
          name={equipment.name} 
          price={equipment.price} 
          availability={equipment.availability} 
          src={equipment.src}
          alt={equipment.alt}
          />
        ))}
    </div>
  );
}
