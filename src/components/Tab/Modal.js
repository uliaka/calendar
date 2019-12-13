import React from 'react';
import './Modal.scss'

const Modal = (props) => {
  const showHideClassName = props.open ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div className='button-close' onClick={props.close}></div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;

