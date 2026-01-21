import { useCallback, useState } from 'react'
import './App.css'
import UserRow from './UserRow';

const roles = ["viewer", "editor", "admin"];
const users = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  role: roles[i % roles.length],
}));

function App() {
 const [selectedId, setSelectedId] = useState(10);
 const onSelect = useCallback ((id) =>  setSelectedId(id), []) 

 return (
   <div
     style={{ fontFamily: "sans-serif", maxWidth: 520, margin: "20px auto" }}
   >
     <h3>User picker</h3>
     <div style={{ border: "1px solid #ddd" }}>
       {users.map((u) => (
         <UserRow
           key={u.id}
           user={u}
           onSelect={onSelect}
           isSelected={u.id === selectedId}
         />
       ))}
     </div>
   </div>
 );
}

export default App
