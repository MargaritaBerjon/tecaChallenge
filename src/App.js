import './App.css';
import React, { useState, useEffect } from 'react';
import { getUsersFromAPI } from './services/Api';
import Form from './components/form';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    // updateUsersFromAPI(2).then(user => {
    //   console.log('User created: ', user);
    // })
    getUsersFromAPI(1).then(users => {
      setUsers(users);
    })
  }, []);
  return (
    <div className="main">
      <Form elem={users} ></Form>
    </div>
  );
}

export default App;
