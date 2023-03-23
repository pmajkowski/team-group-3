import r1 from "./../../img/gallery/realizations/r1.jpg"
import r2 from "./../../img/gallery/realizations/r2.jpeg"
import r3 from "./../../img/gallery/realizations/r3.jpeg"
import r4 from "./../../img/gallery/realizations/r4.jpeg"
import r5 from "./../../img/gallery/realizations/r5.jpg"
import r6 from "./../../img/gallery/realizations/r6.jpeg"
import r7 from "./../../img/gallery/realizations/r7.jpeg"
import r8 from "./../../img/gallery/realizations/r8.jpg"
import r9 from "./../../img/gallery/realizations/r9.jpeg"
import r10 from "./../../img/gallery/realizations/r10.jpeg"
import r11 from "./../../img/gallery/realizations/r11.jpeg"

const imageMap:any = {r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11};
const GalleryItem = ({type}:any,{key}:any) => {
    console.log(key)
	return (
        <div>
            <img alt={key} src={imageMap[type]} />
        </div>
    )
    
};

export default GalleryItem;