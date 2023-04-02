import UserNavigationItem from "./UserNavigationItem";
import "./UserNavigationListStyle.css";
import { BsFillPersonFill, BsCart2 } from "react-icons/bs";
import { IconType } from "react-icons";

interface UserNavigation {
  id: number;
  name: string;
  link: string;
  ico: React.ReactElement<IconType>;
}

const userNavigationList: UserNavigation[] = [
  {
    id: 1,
    name: `customer login`,
    link: `/login`,
    ico: <BsFillPersonFill />,
  },
  {
    id: 2,
    name: `my cart`,
    link: `/cart`,
    ico: <BsCart2 />,
  },
];

function UserNavigationList() {
  const renderedNavigationList = userNavigationList.map((userNavigation) => {
    return (
      <UserNavigationItem
        key={userNavigation.id}
        linkName={userNavigation.name}
        link={userNavigation.link}
        ico={userNavigation.ico}
      />
    );
  });

  return <div className="user-navigation__list">{renderedNavigationList}</div>;
}

export default UserNavigationList;
