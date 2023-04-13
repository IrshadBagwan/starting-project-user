import React,{useState} from 'react';
import AddUser from './Components/Users/AddUser.js';
import UserList from './Components/Users/UsersList.js';


function App() {
    const [usersList,setUsersList] = useState([]);

    const addUserHandler = (uName, uAge, cName) => {
      setUsersList((prevUserlist)=>{
        return[...prevUserlist, {name: uName, age: uAge, college:cName ,id: Math.random().toString()}];
      });
    };


  return (
    <div>
   <AddUser onAddUser={addUserHandler} />
   <UserList users={usersList}/>
    </div>
  );
}

export default App;
