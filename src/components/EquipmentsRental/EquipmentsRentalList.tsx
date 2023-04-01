import { collection, query, getDocs, DocumentData, doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase";
import React from "react"
import {EquipmentsRentalItem} from "./EquipmentsRentalItem";
import { RenderedListClass } from "./EquipmentsRentalListStyled";

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
import z3 from "../../img/equipments/turnout installation/z3.jpeg"
import EquipmentsRentalItemDetails, { EquipmentsRentalItemDetailsProps } from "./EquipmentsRentalItemDetails";

export default function EquipmentsRentalList() {
    const [equipments, setEquipments] = React.useState<DocumentData[]>([]);
    const [selectedItem, setselectedItem] = React.useState<EquipmentsRentalItemDetailsProps|null>(null)

    const handleItemClick = (item:EquipmentsRentalItemDetailsProps):void=>{
      setselectedItem(item)
    }

    const handleItemClose = ():void=>{
      setselectedItem(null)
    }

    const fetchAllEquipments = async () => {
    const queryAllEquipments = query(collection(firestore, "Equipments"));
    const allEquipmentsSnap = await getDocs(queryAllEquipments);
    const allEquipmentsData = allEquipmentsSnap.docs.map((doc) => doc.data());
    setEquipments(allEquipmentsData);
  };

  React.useEffect(() => {

//------------Equipments Base-------------------------

const eq = "Equipments";
const addNewData = async()=>{
  await setDoc(doc(firestore, eq, "a1"),
        {
          name: 'Hydraulic gripper',
          price: 100,
          rentalType: 'h',
          availability: true,
          category: 'Excavator attachments',
          src: a1,
          alt: 'equipment a1'
        }
        ) 
await setDoc(doc(firestore, eq, "a2"),
        {
          name: 'Stone sweeper',
          price: 1000,
          rentalType: 'h',
          availability: true,
          category: 'Excavator attachments',
          src: a2,
          alt: 'equipment a2'
        }
        ) 
        await setDoc(doc(firestore, eq, "o3"),
        {
          name: 'Crawler excavator',
          price: 200,
          rentalType: 'h',
          availability: true,
          category: 'General construction equipments',
          src: o3,
          alt: 'equipment o3'
        }
        ) 
        await setDoc(doc(firestore, eq, "o1"),
        {
          name: 'Two-way excavator',
          price: 180,
          rentalType: 'h',
          availability: true,
          category: 'General construction equipments',
          src: o1,
          alt: 'equipment o1'
        }
        ) 
        await setDoc(doc(firestore, eq, "o2"),
        {
          name: 'Articulated hauler',
          price: 210,
          rentalType: 'h',
          availability: true,
          category: 'General construction equipments',
          src: o2,
          alt: 'equipment o2'
        }
        ) 
        await setDoc(doc(firestore, eq, "w1"),
        {
          name: 'Universal tamping machine UNIMAT 09-4x8/4S',
          price: 4600,
          rentalType: 'h',
          availability: true,
          category: 'High performance machines',
          src: w1,
          alt: 'equipment w1'
        }
        ) 
        await setDoc(doc(firestore, eq, "w2"),
        {
          price: 4000,
          name: 'Track tamping machine Duomatic 09-32 CSM',
          rentalType: 'h',
          availability: true,
          category: 'General construction equipments',
          src: w2,
          alt: 'equipment w2'
        }
        ) 
        await setDoc(doc(firestore, eq, "w3"),
        {
          name: 'Universal tamping machine UNIMAT 09-4x4/4S',
          price: 4300,
          rentalType: 'h',
          availability: true,
          category: 'High performance machines',
          src: w3,
          alt: 'equipment w3'
        }
        ) 
        await setDoc(doc(firestore, eq, "w4"),
        {
          name: 'Dynamic track stabilizer DGS 62 N',
          price: 3500,
          rentalType: 'h',
          availability: true,
          category: 'High performance machines',
          src: w4,
          alt: 'equipment w4'
        }
        ) 
        await setDoc(doc(firestore, eq, "w5"),
        {
          name: 'Universal ballast regulating machine USP 2000-C2',
          price: 2300,
          rentalType: 'h',
          availability: true,
          category: 'High performance machines',
          src: w5,
          alt: 'equipment w5'
        }
        ) 
        await setDoc(doc(firestore, eq, "t1"),
        {
          name: 'Hydraulic track car DH-350.11',
          price: 500,
          rentalType: 'h',
          availability: true,
          category: 'Rail transport',
          src: t1,
          alt: 'equipment t1'
        }
        ) 
        await setDoc(doc(firestore, eq, "t2"),
        {
          name: 'Diesel locomotive 6DH-1 002',
          price: 560,
          rentalType: 'h',
          availability: true,
          category: 'Rail transport',
          src: t2,
          alt: 'equipment t2'
        }
        ) 
        await setDoc(doc(firestore, eq, "zg1"),
        {
          name: 'Mobile rail welding KCM007',
          price: 1600,
          rentalType: 'pcs',
          availability: true,
          category: 'Rail welding',
          src: zg1,
          alt: 'equipment zg1'
        }
        ) 
        await setDoc(doc(firestore, eq, "z1"),
        {
          name: 'Crane Gottwald GS.150.14 GT',
          price: 35000,
          rentalType: '10h',
          availability: true,
          category: 'Turnout installation',
          src: z1,
          alt: 'equipment z1'
        }
        ) 
        await setDoc(doc(firestore, eq, "z2"),
        {
          name: 'Crane KRC910',
          price: 28000,
          rentalType: '10h',
          availability: true,
          category: 'Turnout installation',
          src: z2,
          alt: 'equipment z2'
        }
        ) 
        await setDoc(doc(firestore, eq, "z3"),
        {
          name: 'Track and turnouts laying system PEM-LEM',
          price: 20000,
          rentalType: '10h',
          availability: true,
          category: 'Turnout installation',
          src: z3,
          alt: 'equipment z3'
        }
        ) 
}
addNewData();

    fetchAllEquipments();
  }, []);

  return (
    <div>
      <h1>EquipmentsRentalList</h1>
      <RenderedListClass>
        {equipments.map((equipment:DocumentData) => (
          <EquipmentsRentalItem 
          key={equipment.id} 
          name={equipment.name} 
          price={equipment.price} 
          rentalType={equipment.rentalType}
          availability={equipment.availability} 
          category={equipment.category}
          src={equipment.src}
          alt={equipment.alt}
          onClick={handleItemClick}
          />
        ))}
        </RenderedListClass>
        {selectedItem !== null && (
          <EquipmentsRentalItemDetails
          selectedItem={selectedItem.selectedItem}
          onClose={handleItemClose}
          />
        )}
    </div>
  );
}
