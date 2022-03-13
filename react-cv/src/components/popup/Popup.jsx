import React from 'react'

export default function Popup(props) {
  return  (
    <div  className='popup'>
        <div className="popupInner">
            <button className='close-btn'onClick={()=> props.setTrigger(false)}>Close</button>
            <h3 >My popup  </h3>  
            {props.id}
           
            <p > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quo doloremque ipsam sit dignissimos ullam necessitatibus inventore, unde deleniti suscipit autem repudiandae nesciunt, earum eos fugit iste voluptas molestias magni.</p>
            {props.children}
        </div>
    </div>
  );
}
