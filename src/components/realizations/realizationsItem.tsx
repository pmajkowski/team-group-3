import './realizationsItem.css'

interface RealizationsItemProps {
    src: string;
    alt: string;
    key:string;
}

const RealizationsItem = ({src, alt}:RealizationsItemProps) => {
	return (
        <div className="single-picture" id="effect">
            <img alt={alt} src={src} />
        </div>
    )
};

export default RealizationsItem;