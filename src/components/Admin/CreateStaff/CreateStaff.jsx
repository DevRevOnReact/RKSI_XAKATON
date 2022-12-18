import React from 'react';
import './createStaff.css'

    const CreateStaff = () => {
        return (
            <div className='create-staff'>
                <form action="" className='create-staff-form'>
                    <label className='label-staff'>ФИО:</label>
                    <br/>
                    <input type="text" className="create-staff-input main-name"
                           placeholder="Поиск каталога..."
                    />
                    <br/>
                    <label className='label-staff'>E-mail:</label>
                    <br/>
                    <input type="text" className="create-staff-input main-name"
                           placeholder="Поиск каталога..."
                    />
                    <br/>
                    <label className='label-staff'>Отдел:</label>
                    <br/>
                    <select className="create-staff-input main-name"
                           placeholder="Отдел"
                    >
                        <option value="">Финансовый</option>
                        <option value="">Бухгалтерский</option>
                        <option value="">Разработки</option>
                    </select>
                    <br/>
                    <label className='label-staff'>Дата рождения:</label>
                    <br/>
                    <input type="date" className="create-staff-input main-name"
                           placeholder="Поиск каталога..."
                    />
                    <div className='buttons-staff'>

                    <button className="load-button-staff">
                        Создать
                    </button>
                    </div>
                </form>

                <a href="" className="link-account">Добавить</a>
            </div>
        );
    };

    export default CreateStaff;
