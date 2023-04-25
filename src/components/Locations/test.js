import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/about');
  }

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleClick}>Go to About</button>
    </div>
  );
}




import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  const { pathname, search, hash } = location;

  return (
    <div>
      <h1>My Component</h1>
      <p>Current path: {pathname}</p>
      <p>Current query string: {search}</p>
      <p>Current hash: {hash}</p>
    </div>
  );
}


const mapLocationList = LocationData.map(location => {
  return (
    <div className={classes.container} key={location.name}>
      <LocationListItem
        name={location.name}
        city={location.city}
        phone={location.phone}
        adress={location.adress.map(addr => ` ${addr.street} ${addr.local} ${addr.post}`)}
        country={location.country}
        open={location.open}
        close={location.close}
      />
    </div>
  );
});


interface MyObject {
  name: string;
  age: number;
  email: string;
}

interface MyArray {
  [index: number]: MyObject;
}


const myArray: MyArray = [
  { name: "Alice", age: 30, email: "alice@example.com" },
  { name: "Bob", age: 40, email: "bob@example.com" }
];



const LocationList = () => {
  const mapLocationList = LocationData.map((location, index) => {
    return (
      <div key={index} className={classes.container}>
        <LocationListItem
          name={location.name}
          city={location.city}
          phone={Number(location.phone)}
          adress={location.adress.map((add) => `{${add.street}, ${add.local}, ${add.post}}`)}
          country={location.country}
          open={location.open}
          close={location.close}
        />
      </div>
    );
  });
  return <div>{mapLocationList}</div>;
};



