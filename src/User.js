import React, { useState , useEffect, useRef} from 'react';
import Modal from './Modal';
import './User.css'




const User = ({user,del,setXyz,setModal}) => {
    const [liked,setLiked]=useState(false);
  
    const icon = useRef(null);
    const handleLike=()=>{
      var heart=icon.current;
        if(!liked)
       { setLiked(true);
      
        heart.classList.add('fa-heart1')
       }
       else{
           setLiked(false);
          
        heart.classList.remove('fa-heart1')

       }
    }


    

  return <div className='user'>
   
   <div className='img_card'>
       <div className='user_img'>
<img src={user.img}/>
       </div>
   </div>
   <div className='user_info'>
   <h3>{user.name}</h3>
          <div className='action'>
          <i className="far fa-envelope"></i>

            <p >{user.mail}</p>
          </div>
          <div  className='action'>
          <i className="fas fa-phone-alt"></i>
            <p >{user.phone}</p>
          </div>
          <div  className='action'>
          <i class="fas fa-globe"></i>
            <p>{user.web}</p>
          </div>
   </div>
   <ul className='user_actions'>
   <li >
   
   <span className='user_action'
   onClick={handleLike}><i ref={icon} className="fa fa-heart" ></i>
  </span></li> 
  <li >
   
   <span className='user_action'
    onClick={()=>{setModal(true)
    setXyz(user)}}><i className='far fa-edit' ></i>
  </span></li> 
  <li >
   
   <span className='user_action'
   onClick={()=>del(user.id)
   }
   >
   <i class="fas fa-trash"></i>
  </span></li> 
     
       </ul>
   
   
  </div>;
  
};

export default User;
