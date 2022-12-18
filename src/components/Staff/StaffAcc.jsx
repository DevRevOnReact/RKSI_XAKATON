import React from 'react';
import './staff.css'
import img from "./../../img/img_3.png"
import img_1 from "./../../img/img_4.png"
const StaffAcc = () => {
    return (

        <div className='row staff-acc'>

            <div className='col-md staff-list'>
                <ul className='staff-acc-list'>
                    <li className="staff-acc-item">ФИО: Камбулов Богдан Андреевич</li>
                    <li className="staff-acc-item">E-mail: kambulov2017@gmail.com</li>
                    <li className="staff-acc-item">Отдел: Финансовый отдел</li>
                    <li className="staff-acc-item">Дата рождения:20.08.2004</li>
                    <li className="staff-acc-item">Наличие доступа: <img src={img} alt=""/></li>
                </ul>
            </div>
            <div className='col-md'>
                <img className='avatar' src={img_1} alt=""/>
                <div className='set-password'>
                    <button className="btn btn-primary button-login-1">сменить пароль</button>
                </div>
            </div>
        </div>
    );
};

export default StaffAcc;
