import NavigationItem from "./NavigationItem";
import "./NavigationListStyle.css";
import { FaPhoneAlt } from "react-icons/fa";
interface ListedNavigation {
  id: number;
  name: string;
  link: string;
}

const navigationList: ListedNavigation[] = [
  {
    id: 1,
    name: `HOME`,
    link: `/`,
  },
  {
    id: 2,
    name: `Equipment Rental`,
    link: `/equipment-rentals`,
  },
  {
    id: 3,
    name: `Equipments at work`,
    link: `/equip-at-work`,
  },
  {
    id: 4,
    name: `Realizations`,
    link: `/realizations`,
  },
  {
    id: 5,
    name: `Locations`,
    link: `/locations`,
  },
  {
    id: 6,
    name: `About`,
    link: `/about`,
  },
  {
    id: 7,
    name: `Forms & Downloads`,
    link: `/downloads`,
  },
];

function NavigationList() {
  const renderedNavigationList = navigationList.map((navigation) => {
    return (
      <NavigationItem
        key={navigation.id}
        linkName={navigation.name}
        link={navigation.link}
      />
    );
  });
  return (
    <div className="navigation-list">
      {renderedNavigationList}
      <div className="phone">
        <FaPhoneAlt /> <p>517 924 791</p>
      </div>
    </div>
  );
}

export default NavigationList;
