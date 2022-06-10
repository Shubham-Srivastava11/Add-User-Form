import UserForm from './UserForm/UserForm';
import React, { useState } from 'react';
import DisplayUser from './UserForm/DisplayUser/DisplayUser';
// import AgeError from './UserForm/AgeError/AgeError';

function App(props) {
  const [allUsers, setAllUsers] = useState([
    { id: 'u1', text: 'Shubham (26 years old)' },
    { id: 'u2', text: 'Dave (22 years old)' }
  ]);


  const addUserHandler = (user, age) => {
    const dataString = `${user} (${age} years old.)`;
    const updateUsers = [...allUsers];
    updateUsers.unshift({ id: Math.random(), text: dataString });
    setAllUsers(updateUsers);
  }

  return (
    <div>
      <UserForm onAddUSer={addUserHandler} />
      <DisplayUser showUser={allUsers} />
      {/* <AgeError /> */}
    </div>
  );
}

export default App;
