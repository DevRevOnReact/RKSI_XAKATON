

import React from 'react';
import img from './../../../img/img_1.png'
import {Link} from "react-router-dom";
import "./loginstaff.css";
const LoginStaff = () => {
    return (
        <div className="login">
        <div >
            <Link to={"/"}><img className='login-img ' src={img} alt=""/></Link>
            <ul className="login-list">
                <li className='list-item'>
                    <label>Cтарый пароль:  </label>
                        <input type="text" className='main-input-2 main-name'
                               placeholder=""
                        />

                </li>
                <li className='list-item'>
                    <label>Новый пароль: </label>
                        <input type="text" className="main-input-2 main-name"
                               placeholder=""
                        />

                </li>
                <li className='list-item'>
                    <label>Повторите новый пароль: </label>
                        <input type="text" className="main-input-2 main-name"
                               placeholder=""
                        />
                </li>

                <div className='button-login'>
                    <button className="btn btn-primary button-login-1">Пользователи</button>
                </div>
            </ul>

        </div>
        </div>
    );
};

export default LoginStaff;
