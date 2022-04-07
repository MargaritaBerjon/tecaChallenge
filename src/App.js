import './App.css';
import React, { useState, useEffect } from 'react';
import { getUsersFromAPI, updateUsersFromAPI } from './services/Api';
import { Routes, Route, useNavigate } from "react-router-dom";
import Form from './components/form/form';
import Error from './components/error/error';
import Success from './components/success/success';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersFromAPI(1).then(users => {
      setUsers(users);
    })
  }, []);

  let navigate = useNavigate();
  const updateUser = (id, userInfo) => {
    updateUsersFromAPI(id, userInfo).then(res => res.json())
      .then(res => {
        if (res.errors) {
          navigate("/error ");
        }
        if (res.success) {
          navigate("/success ");
        }
      });
  }

  return (

    <div className="main">
      <Routes>
        <Route path="/" element={
          <Form usersData={users} onUserUpdated={(id, userInfo) => updateUser(id, userInfo)}></Form>
        } />
        <Route path="error" element={<Error />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </div>

  );
}

export default App;
