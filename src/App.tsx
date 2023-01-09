import EventComponent from './events/EventComponent';
import UserSearch from './refs/UserSearch';
import GuestList from './state/GuestList';
//import UserSearch from './state/UserSearch';
/* import Usersearch from './classes/Usersearch'; */

const App = () => {
  const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Carlo', age: 25 },
  ];
  return (
    <div>
      <UserSearch />
    </div>
  );
};

export default App;
