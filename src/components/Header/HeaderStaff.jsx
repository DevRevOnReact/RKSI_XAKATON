import React from 'react';
import img from "../../img/img_1.png";
import {Link} from "react-router-dom";
import img_1 from "../../img/img_5.png";
import './header.css'

const HeaderStaff = () => {
    return (
        <div className="container">
            <div className="row ">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <div className="col-sm">
                            <div className="navbar-brand justify-content-start" href="#"><img src={img} alt=""/></div>
                        </div>
                        <div className="col-sm">
                            <form id="" className="justify-content-end center-form" >
                                <input type="text" className="main-input main-name"
                                       placeholder="Поиск каталога..."
                                />
                            </form>
                        </div>
                        <div className="col-sm">
                            <ul className="navbar-nav justify-content-end">
                                <Link to={""}>
                                     <img className='avatar' src={img_1} alt=""/>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>


    );
};

export default HeaderStaff;
