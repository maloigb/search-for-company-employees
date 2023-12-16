import getUsers from './services/getUsers'
import './App.css'
import { useEffect, useState } from 'react'
import { User } from './models/User'

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {

    const fetchData = async() => {

      const allUsers: User[] = await getUsers.getAllUsers();
      setUsers(allUsers);
    } 
    fetchData();
    
  }, []);
  
  return (
    <div className="container">
      <h1>Hellow World</h1>
    </div>
  )
}

export default App;
