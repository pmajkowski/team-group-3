import GalleryItem from "./galleryItem";
import './gallery.css'

const imageList: {name: string, alt: string}[] = [
    {name: 'r1', alt: 'Realization 1'},
    {name: 'r2', alt: 'Realization 2'},
    {name: 'r3', alt: 'Realization 3'},
    {name: 'r4', alt: 'Realization 4'},
    {name: 'r5', alt: 'Realization 5'},
    {name: 'r6', alt: 'Realization 6'},
    {name: 'r7', alt: 'Realization 7'},
    {name: 'r8', alt: 'Realization 8'},
    {name: 'r9', alt: 'Realization 9'},
    {name: 'r10', alt: 'Realization 10'},
    {name: 'r11', alt: 'Realization 11'}
  ];
 
  const RealizationsList: React.FC = () => {
    const renderedImages = imageList.map((image) => (
        <GalleryItem type={image.name} key={image.alt}/>
    ));
	return (<div className="gallery">
        <div className="rendered-items">{renderedImages}</div>
        </div>
    )
};

export default RealizationsList;