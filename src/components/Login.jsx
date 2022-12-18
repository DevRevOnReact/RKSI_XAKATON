import React from "react";

const Login = () => {
    return (
        <div className='create-staff'>
            <form action="" className='create-staff-form'>
                <label className='label-staff'>Email:</label>
                <br/>
                <input type="text" className="create-staff-input main-name"
                       placeholder="Email"
                />
                <br/>
                <label className='label-staff'>Пароль:</label>
                <br/>
                <input type="password" className="create-staff-input main-name"
                       placeholder="Пароль"
                />
                <br/>
                <div className='buttons-staff'>

                    <button className="load-button-staff">
                                Войти
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
