import img from './../../img/img_1.png'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="container">
            <div className="row ">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <div className="col-sm">
                    <Link className="navbar-brand justify-content-start" to={"/"}><img src={img} alt=""/></Link>
                    </div>
                    <div className="col-sm">
                    <form id="" className="justify-content-center" >
                        <input type="text" className="main-input main-name"
                               placeholder="Поиск каталога..."
                        />
                    </form>
                    </div>
                    <div className="col-sm">
                        <ul className="navbar-nav justify-content-end">

                            <li className="nav-item">

                                <Link className="nav-link link text-center" to="/staff">Пользователи</Link>

                            </li>

                            <li className="nav-item">
                                <Link className="nav-link link text-center" to="/documentAll">Документы</Link>
                            </li>
                            <li className="nav-item">

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        </div>




    );
};

export default Header

