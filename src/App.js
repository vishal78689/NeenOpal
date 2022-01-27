import './App.css';
import User from './User';
import data from './data.json'
import { useState} from 'react';
import Adduser from './Adduser';
import Modal from './Modal';

function App() {
  
   const [users,setUsers]=useState(data);
   const [xyz,setXyz]=useState({});
   const [modal,setModal]=useState(false);
   const [amodal,setAmodal]=useState(false);
  const del=(i)=>{
    
      console.log(i);
     const news=  users.filter(m => m.id !== i);
     setUsers(news);
       console.log(news);
    
  }
  const updateuser=(dat)=>{
    
    const ans=users.map((entry) => {
        if (entry.id === dat.id) return {...entry,...dat};
        return entry;
      });
  
    console.log(ans);
    console.log(dat);

  }
  const body=document.querySelector('body');
  body.style.overflow=(modal||amodal)?'hidden':'auto';


  return (
    <div className="App" id='app'>
    <div className='App1' id='users'>
     {
       users.map((user,i)=>(
         <User user={user}  index={i}
           del={del} setXyz={setXyz} setModal={setModal}
           key={i}
         />
       ))
      
     }
     <div className='add'>
     <i class="fas fa-user-plus"
     onClick={()=>setAmodal(true)}
     ></i>
     </div>
     </div>
     
     {
      (amodal)?( <Adduser setOpenModal= {setAmodal} 
      users={users} setUsers={setUsers}
      />):null
  }
  {
      (modal)?( <Modal setOpenModal= {setModal} user={xyz}
        updateuser={updateuser}
      />):null
  }

    
    
     
   
    </div>
  );
}

export default App;
