import RealizationsItem from "./realizationsItem";
import './realizationsList.css'
import r1 from "../../img/gallery/realizations/r1.jpg"
import r2 from "../../img/gallery/realizations/r2.jpeg"
import r3 from "../../img/gallery/realizations/r3.jpeg"
import r4 from "../../img/gallery/realizations/r4.jpeg"
import r5 from "../../img/gallery/realizations/r5.jpg"
import r6 from "../../img/gallery/realizations/r6.jpeg"
import r7 from "../../img/gallery/realizations/r7.jpeg"
import r8 from "../../img/gallery/realizations/r8.jpg"
import r9 from "../../img/gallery/realizations/r9.jpeg"
import r10 from "../../img/gallery/realizations/r10.jpeg"
import r11 from "../../img/gallery/realizations/r11.jpeg"

const imageList: {name: string, alt: string}[] = [
    {name: r1, alt: 'Realization 1'},
    {name: r2, alt: 'Realization 2'},
    {name: r3, alt: 'Realization 3'},
    {name: r4, alt: 'Realization 4'},
    {name: r5, alt: 'Realization 5'},
    {name: r6, alt: 'Realization 6'},
    {name: r7, alt: 'Realization 7'},
    {name: r8, alt: 'Realization 8'},
    {name: r9, alt: 'Realization 9'},
    {name: r10, alt: 'Realization 10'},
    {name: r11, alt: 'Realization 11'}
  ];
 
  const RealizationsList: React.FC = () => {
    const renderedImages = imageList.map((image) => (
        <RealizationsItem src={image.name} alt={image.alt} key={image.name}/>
    ));
	return (<div>
        <div className="rendered-items">{renderedImages}</div>
        </div>
    )
};

export default RealizationsList;