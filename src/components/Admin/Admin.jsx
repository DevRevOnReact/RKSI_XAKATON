import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Header from "../Header/Header";
import  "./admin.css"
import img_1 from './../../img/icon-staff/img_1.png'
import img_2 from './../../img/icon-staff/img_2.png'
import img_3 from './../../img/icon-staff/img_3.png'
import img_4 from './../../img/buttons/img.png'
import img_5 from './../../img/buttons/img_1.png'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state={fileUploadState:""}
        this.inputReference = React.createRef();
    }



    fileUploadAction = () =>this.inputReference.current.click();
    fileUploadInputChange = (e) =>this.setState({fileUploadState:e.target.value});
    fileUploadButton = () => {
        document.getElementById('fileButton').click();
        document.getElementById('fileButton').onchange = () =>{
            this.setState({
                fileUploadState:document.getElementById('fileButton').value
            });
        }
    }
render() {
    return (
        <>
           <Header />

            <table className="admin-catalogs">
                <tbody>

                <tr style={{borderBottom: "1px solid black"}}>
                    <td  ><h2></h2></td>
                    <td colSpan="2" ><h2>название</h2></td>
                    <td><h2>тип</h2></td>
                    <td><h2>доступ</h2></td>
                    <td><h2>добавлено</h2></td>
                </tr>

                <tr className='admin-catalogs-list-item' >
                    <td > <input type="checkbox" className="form-check-input"/></td>
                    <td colSpan="2" > <img style={{width:'40px', height:'40px'}} src={img_1} alt=""/>Школьная программа за 9 класс</td>
                    <td>docx</td>
                    <td>Индивидуальный</td>
                    <td>15 дек. 2022 г., 19:11</td>
                </tr>
                <tr className='admin-catalogs-list-item'>
                    <td > <input type="checkbox" className="form-check-input"/></td>
                    <td colSpan="2"> <img style={{width:'25px', height:'30px'}} src={img_2} alt=""/> Школьная программа за 9 класс</td>
                    <td>docx</td>
                    <td>Индивидуальный</td>
                    <td>15 дек. 2022 г., 19:11</td>
                </tr>
                <tr className='admin-catalogs-list-item'>
                    <td > <input type="checkbox" className="form-check-input"/></td>
                    <td colSpan="2"><img style={{width:'25px', height:'30px'}} src={img_3} alt=""/> Школьная программа за 9 класс</td>
                    <td>docx</td>
                    <td>Индивидуальный</td>
                    <td>15 дек. 2022 г., 19:11</td>
                </tr>
                </tbody>
            </table>

            <div className='buttons'>
                <button className="delete-button"><img src={img_4} alt=""/>Удалить</button>
                <button  className="load-button"><img src={img_5} alt=""/>Загрузить</button>
            </div>

        </>




    );
}
};

export default Admin;
