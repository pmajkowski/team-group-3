import {RealizationsItem, RealizationsItemDetailsProps} from "./realizationsItem";
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
import { RenderedListClass, TitleOfCart } from "./realizationsListStyled";

const imageList: RealizationsItemDetailsProps[] = [
    {src: r1, alt: 'Realization 1'},
    {src: r2, alt: 'Realization 2'},
    {src: r3, alt: 'Realization 3'},
    {src: r4, alt: 'Realization 4'},
    {src: r5, alt: 'Realization 5'},
    {src: r6, alt: 'Realization 6'},
    {src: r7, alt: 'Realization 7'},
    {src: r8, alt: 'Realization 8'},
    {src: r9, alt: 'Realization 9'},
    {src: r10, alt: 'Realization 10'},
    {src: r11, alt: 'Realization 11'}
  ];
 
  const RealizationsList = (): JSX.Element => {
    function renderedImageList(realizationsItemDetails:RealizationsItemDetailsProps) :JSX.Element {
        return <RealizationsItem
        key={realizationsItemDetails.src}
        alt={realizationsItemDetails.alt}
        src={realizationsItemDetails.src}
        />
     }
	return (
        <div>
            <TitleOfCart>Our participation in the implementation of the investment "Reconstruction of Gdynia Port station"</TitleOfCart>
        <RenderedListClass>{imageList.map(renderedImageList)}</RenderedListClass> 
        </div>
    )
};

export default RealizationsList;