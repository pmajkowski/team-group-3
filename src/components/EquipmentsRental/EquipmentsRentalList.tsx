import { collection, query, getDocs, DocumentData } from "firebase/firestore";
import { firestore } from "../../firebase";
import React, { useState } from "react";
import { EquipmentsRentalItem } from "./EquipmentsRentalItem";
import { RenderedListClass, TitleOfCart } from "./EquipmentsRentalListStyled";
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

const equipmentRentalList = [
  {src:a1, alt:'Equipment 1'},
  {src:a2, alt:'Equipment 2'},
  {src:o1, alt:'Equipment 3'},
  {src:o2, alt:'Equipment 4'},
  {src:o3, alt:'Equipment 5'},
  {src:w1, alt:'Equipment 6'},
  {src:w2, alt:'Equipment 7'},
  {src:w3, alt:'Equipment 8'},
  {src:w4, alt:'Equipment 9'},
  {src:w5, alt:'Equipment 10'},
  {src:t1, alt:'Equipment 11'},
  {src:t2, alt:'Equipment 12'},
  {src:zg1, alt:'Equipment 13'},
  {src:z1, alt:'Equipment 14'},
  {src:z2, alt:'Equipment 15'},
  {src:z3, alt:'Equipment 16'},
]

export default function EquipmentsRentalList() {
  const [equipmentstFirestoreData, setEquipmentstFirestoreData] =
    React.useState<DocumentData[]>([]);

  const fetchAllEquipments = async () => {
    const queryAllEquipments = query(collection(firestore, "Equipments"));
    const allEquipmentsSnap = await getDocs(queryAllEquipments);
    const allEquipmentsData = allEquipmentsSnap.docs.map((doc) => doc.data());
    setEquipmentstFirestoreData(allEquipmentsData);
  };

  React.useEffect(() => {
    fetchAllEquipments();
  }, []);
  // const handleChangedCategory = (cat:any)=>{
  //   const filteredEquipmentsFirestoreData = equipmentstFirestoreData.filter((filteredItem)=>filteredItem.category !==cat)
  //   setEquipmentstFirestoreData(filteredEquipmentsFirestoreData);
  // }
  return (
    <div>
      <TitleOfCart>Equipment Rental List</TitleOfCart>
      <RenderedListClass>
        {equipmentstFirestoreData.map((equipment:any) => (
          <EquipmentsRentalItem
            key={equipment.name}
            name={equipment.name}
            price={equipment.price}
            rentalType={equipment.rentalType}
            availability={equipment.availability}
            category={equipment.category}
            src={equipment.src}
            alt={equipment.alt}
          />
        ))}
      </RenderedListClass>
    </div>
  );
}
