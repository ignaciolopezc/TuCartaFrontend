import React from 'react'
import './Modal.css'

const Mensaje = ({children}) => {


    const cerrarModal = () => {
        document.body.classList.remove('active-modal')
    };


  return (
    <div className="modal">
        <div className="overlay" onClick={cerrarModal}></div>
            <div className="modal-content">
                <h2>Hello Modal</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                    perferendis suscipit officia recusandae, eveniet quaerat assumenda
                    id fugit, dignissimos maxime non natus placeat illo iusto!
                    Sapiente dolorum id maiores dolores? Illum pariatur possimus
                    quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                    placeat tempora vitae enim incidunt porro fuga ea.
                </p>
                <button className="close-modal" onClick={cerrarModal}>
              CLOSE
            </button>
            </div>
    </div>
  )
}

export default Mensaje