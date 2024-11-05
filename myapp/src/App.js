// import './App.css';
import CounterControls from './components/others/CounterControls';
import CounterDisplay from './components/others/CounterDisplay';
import AddUserForm from './components/user/AddUserForm';
import UserList from './components/user/UserList';

function App() {
  return (
    <div className="App">
      {/* <CounterDisplay />
      <CounterControls /> */}
      <AddUserForm/>
      <UserList/>

    </div>
  );
}

export default App;
