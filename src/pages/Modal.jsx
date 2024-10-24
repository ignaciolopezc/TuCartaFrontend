import React from 'react'
import { useState, useEffect } from 'react'
import './Modal.css'
import Mensaje from './Mensaje';

const Modal = ({children}) => {



    const [modal, setModal] = useState(false);


    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


  return (
        <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && ( 
        <Mensaje className="modal"/>
      )}
      <button className="close-modal" onClick={toggleModal}>CLOSE</button>
      
    </>
  )
}

export default Modal