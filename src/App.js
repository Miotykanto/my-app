import React, { useState } from 'react';

import Form from './Component/forme/forme';
import Tableau from './Component/tableau/tableau';
import './App.css';
import './Component/forme/forme.css'
import './Component/tableau/tableau.css'

const App = () => {
    const usersData = []
  
    const [ users, setUsers ] = useState(usersData)

    const ajouter = user => {
      user.id = users.length 
      setUsers([ ...users, user ])
    }

    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id))
    }

    return (
      <div className="container-fluid">
      <div className="flex-row">
        <div className="flex-large">
          <Form ajouter={ajouter} />
        </div>
        <div className="flex-large">
          <Tableau users={users} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
    )
  };

export default App;