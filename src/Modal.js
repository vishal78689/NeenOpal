import React, {useEffect}from 'react';
import './Modal.css'


function Modal({ setOpenModal,user,updateuser}) {
  const formSubmit=()=>{
    const data=user;
    data.name= document.getElementById('name').value;
    data.mail= document.getElementById('mail').value;
    data.phone= document.getElementById('phone').value;
    data.web= document.getElementById('web').value;
   // console.log(data);
    setOpenModal(false);
    element.classList.remove('blur');
    updateuser(data);
  }
  var element=document.getElementById('users');
  

  element.classList.add('blur');
 

    return (
      <div className="modalBackground" >
        <div className="modalContainer">
          <div className="titleCloseBtn">
          <h1>Basic Modal</h1>
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
        defaultValue={user.name}
        />
      </label>
      <label className='ltext'> Email:
        <input type="text" placeholder='Sincere@april.biz' defaultValue={user.mail}
           id='mail'
        />
      </label>
      <label className='ltext'>Phone:
        <input type="text" placeholder='1-770-736-8031 x56442' defaultValue={user.phone}
           id='phone'
        />
      </label>
      <label className='ltext'>Website:
        <input type="text" placeholder='hildegard.org' defaultValue={user.web}
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

export default Modal;
