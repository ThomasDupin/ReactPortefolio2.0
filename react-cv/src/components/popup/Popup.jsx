import React from 'react'

export default function Popup(props) {
  return (props.trigger) ? (

    <div  className='popup'>
        <div className="popupInner">
            <button className='close-btn'onClick={()=> props.setTrigger(false)}>Close</button>
            {props.children}
        </div>
    </div>

  ): "";
}
