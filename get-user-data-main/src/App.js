import React, { useState } from 'react';
import Navbar from './Navbar';
import UserGrid from './UserGrid';
import Loader from './Loader';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching users: ', error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <Navbar getUsers={getUsers} />
      {loading ? <Loader /> : <UserGrid users={users} />}
    </div>
  );
}

export default App;
