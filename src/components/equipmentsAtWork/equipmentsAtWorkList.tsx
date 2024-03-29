import s1 from "../../img/gallery/equipments at work/s1.jpg"
import s2 from "../../img/gallery/equipments at work/s2.jpeg"
import s3 from "../../img/gallery/equipments at work/s3.jpeg"
import s4 from "../../img/gallery/equipments at work/s4.jpeg"
import s5 from "../../img/gallery/equipments at work/s5.jpeg"
import s6 from "../../img/gallery/equipments at work/s6.jpeg"
import s7 from "../../img/gallery/equipments at work/s7.jpeg"
import s8 from "../../img/gallery/equipments at work/s8.jpeg"
import s9 from "../../img/gallery/equipments at work/s9.jpeg"
import s10 from "../../img/gallery/equipments at work/s10.jpeg"
import { EquipmentsAtWorkItem, EquipmentsAtWorkItemProps } from "./equipmentsAtWorkItem"
import {  RenderedListClass, TitleOfCart } from "./equipmentsAtWorkListStyled"
import React from "react"


const equipmentsList: EquipmentsAtWorkItemProps[]=[
	{src: s1, alt: "equipment 1"},
	{src: s2, alt: "equipment 2"},
	{src: s3, alt: "equipment 3"},
	{src: s4, alt: "equipment 4"},
	{src: s5, alt: "equipment 5"},
	{src: s6, alt: "equipment 6"},
	{src: s7, alt: "equipment 7"},
	{src: s8, alt: "equipment 8"},
	{src: s9, alt: "equipment 9"},
	{src: s10, alt: "equipment 10"}
];

const EquipmentsAtWorkList: React.FC = () => {
	const renderedEquipmentsList =(equipmentsAtWorkItem:EquipmentsAtWorkItemProps): JSX.Element => {
		return <EquipmentsAtWorkItem 
		key={equipmentsAtWorkItem.src}
		src={equipmentsAtWorkItem.src}
		alt={equipmentsAtWorkItem.alt}
		/>
	}
	return <div>
		<TitleOfCart className="h1-equip">Our Equipment While Working On Site</TitleOfCart>
		<RenderedListClass>
		{equipmentsList.map(renderedEquipmentsList)}
		</RenderedListClass>
	</div>
};

export default EquipmentsAtWorkList;


