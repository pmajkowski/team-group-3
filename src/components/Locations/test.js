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
