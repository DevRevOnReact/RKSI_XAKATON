import React, {useState} from 'react';
import Header from "../../Header/Header";
import HeaderStaff from "../../Header/HeaderStaff";
import img_1 from "../../../img/icon-staff/img_1.png";
import img_2 from "../../../img/icon-staff/img_2.png";
import img_3 from "../../../img/icon-staff/img_3.png";
import img_4 from "../../../img/buttons/img.png";
import img_5 from "../../../img/buttons/img_1.png";
import img_6 from "../../../img/access/img.png";
import img_7 from "../../../img/access/img_1.png";
import Modal from "../../ui/Modal";
import CreateStaff from "./CreateStaff";

const CreateStaffPage = () => {
    const [modalActive, setModalActive] = useState('')
    return (
        <div>
        <Header />
            <>
                <table className="admin-catalogs">
                    <tbody>

                    <tr style={{borderBottom: "1px solid black"}}>
                        <td  ><h2></h2></td>
                        <td colSpan="2" ><h2>название</h2></td>
                        <td><h2>тип</h2></td>
                        <td><h2>Дата рождения</h2></td>
                        <td><h2>Наличие доступа</h2></td>
                    </tr>

                    <tr className='admin-catalogs-list-item' >
                        <td > <input type="checkbox" className="form-check-input"/></td>
                        <td colSpan="2" > Илон Маск Сергеевич</td>
                        <td>docx</td>
                        <td>28 июня 1971</td>
                        <td><img className="access_point" src={img_6} alt=""/></td>
                    </tr>
                    <tr className='admin-catalogs-list-item'>
                        <td > <input type="checkbox" className="form-check-input"/></td>
                        <td colSpan="2"> Илон Маск Сергеевич</td>
                        <td>docx</td>
                        <td>28 июня 1971</td>
                        <td><img className="access_point" src={img_6} alt=""/></td>
                    </tr>
                    <tr className='admin-catalogs-list-item'>
                        <td > <input type="checkbox" className="form-check-input"/></td>
                        <td colSpan="2">Илон Маск Сергеевич</td>
                        <td>docx</td>
                        <td>28 июня 1971</td>
                        <td><img className="access_point" src={img_7} alt=""/></td>
                    </tr>
                    </tbody>
                </table>

                <div className='buttons'>
                    <button className="delete-button"><img src={img_4} alt=""/>Удалить</button>

                    <button  className="load-button"  onClick={() => setModalActive(true)}><img src={img_5} alt=""/>Создать</button>
                    <Modal active={modalActive} setActive={setModalActive} >

                        { modalActive ?<button className="open-btn" onClick={() => setModalActive(false)}>X</button> : null }
                        { modalActive ? <CreateStaff /> : null }

                    </Modal>
                </div>


            </>
        </div>
    );
};

export default CreateStaffPage;
