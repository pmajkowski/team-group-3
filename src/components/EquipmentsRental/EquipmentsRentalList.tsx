import { collection, query, getDocs, DocumentData } from "firebase/firestore";
import { firestore } from "../../firebase";
import React from "react";
import { EquipmentsRentalItem } from "./EquipmentsRentalItem";
import { RenderedListClass } from "./EquipmentsRentalListStyled";

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

  return (
    <div>
      <h1>EquipmentsRentalList</h1>
      <RenderedListClass>
        {equipmentstFirestoreData.map((equipment) => (
          <EquipmentsRentalItem
            key={equipment.id}
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
