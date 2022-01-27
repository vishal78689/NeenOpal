import React, {useEffect, useState}from 'react';
import './Adduser.css'


function Adduser({ setOpenModal,users,setUsers}) {
  const [imag,setImag]=useState([]);
  const [nam,setNam]=useState('');
  var element=document.getElementById('users');
  

  element.classList.add('blur');
  
  const formSubmit=()=>{
     const data={
       id:users.length+1,
       name:"",
       mail:"",
       phone:"",
       web:"",
       img:imag.url,
     };
    data.name= document.getElementById('name').value;
    data.mail= document.getElementById('mail').value;
    data.phone= document.getElementById('phone').value;
    data.web= document.getElementById('web').value;
   console.log(data);
   setUsers([...users,data])
   element.classList.remove('blur');
    setOpenModal(false);
 
  }

  const fetchimg= ()=>{
    fetch(
      `https://avatars.dicebear.com/api/avataaars/${nam}.svg?options[mood][]=happy`)
      .then(response => response)
  .then(data => setImag(data));
                  
 
                
  }
  useEffect(() => {
    fetchimg();
  }, [nam]);
  
    
 


    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
          <h1>ADD USER</h1>
            <button
              onClick={() => {
                setOpenModal(false) 
                element.classList.remove('blur');
              }}
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div style={{ borderTop: "2px solid rgb(206, 191, 191)"}}></div>
          <div className="body">
          <form className='forminp' >
      <label className='ltext'>Name:
        <input type="text"  
        placeholder='Leanne Graham' 
        id='name'
        onChange={(e)=>{setNam(e.target.value)}}
        
        />
      </label>
      <label className='ltext'> Email:
        <input type="text" placeholder='Sincere@april.biz' 
           id='mail'
        />
      </label>
      <label className='ltext'>Phone:
        <input type="text" placeholder='1-770-736-8031 x56442' 
           id='phone'
        />
      </label>
      <label className='ltext'>Website:
        <input type="text" placeholder='hildegard.org' 
           id='web'
        />
      </label>
   

  
    </form>
          </div>
          <div style={{ borderTop: "2px solid rgb(206, 191, 191)"}}></div>
          <div className="footer">
  


            <button
              onClick={() => {
                setOpenModal(false);
                element.classList.remove('blur');
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button id="okbtn" onClick={formSubmit}
           >OK</button>
          </div>
        </div>
      </div>
    );
  }

export default Adduser;
