import React, {Component, useState} from 'react';
import Header from "../Header/Header";
import HeaderStaff from "../Header/HeaderStaff";
import {OutTable, ExcelRenderer} from 'react-excel-renderer';

class StaffCatalogs extends Component{
    fileHandler = (event) => {
        let fileObj = event.target.files[0];

        //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
            if(err){
                console.log(err);
            }
            else{
                this.setState({
                    cols: resp.cols,
                    rows: resp.rows
                });
            }
        });

    }

render() {

    return (
<>
<Header />
    <table className="staff-catalogs">
        <tbody>
        <tr style={{borderBottom: "1px solid black"}}>
            <td></td>
            <td colSpan="2" className='staff-catalogs-item' ><h2>название</h2></td>
            <td><h2 className='staff-catalogs-item'>тип</h2></td>

            <td><h2 className='staff-catalogs-item'>добавлено</h2></td>
        </tr>

        <tr >
            <td > <input type="checkbox" className="form-check-input"/></td>
            <td colSpan="2" className='admin-catalogs-list-item'>Школьная программа за 9 класс</td>
            <td  className='staff-catalogs-list-item'>docx</td>

            <td>15 дек. 2022 г., 19:11</td>
        </tr>
        <tr>
           <td> <input type="checkbox" className="form-check-input"/></td>
            <td colSpan="2">Школьная программа за 9 класс</td>
            <td>docx</td>

            <td>15 дек. 2022 г., 19:11</td>
        </tr>
        <tr>
            <td > <input type="checkbox" className="form-check-input"/></td>
            <td colSpan="2">Школьная программа за 9 класс</td>
            <td>docx</td>

            <td>15 дек. 2022 г., 19:11</td>
        </tr>

        </tbody>
    </table>

</>

    );
}
};


export default StaffCatalogs;
