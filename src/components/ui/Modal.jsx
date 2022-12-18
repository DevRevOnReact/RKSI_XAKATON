import React, {useState} from 'react';

import {Button} from "react-bootstrap";
import CreateStaff from "../Admin/CreateStaff/CreateStaff";
import './modal.css'
const Modal = ({active,setActive, children}) => {


    return (
        <div className={active ? 'modal active' : 'active'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'active'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );

};

export default Modal;
