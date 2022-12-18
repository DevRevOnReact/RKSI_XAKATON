import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Route, Routes} from "react-router";
import Header from "./components/Header/Header";
import Staff from "./components/Staff/Staff";
import Documents from "./components/Documents/Documents";
import CreateStaffPage from "./components/Admin/CreateStaff/CreateStaffPage";
import StaffCatalogs from "./components/Staff/StaffCatalogs";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/staff" element={<CreateStaffPage />} />
            <Route path="/documentAll" element={<StaffCatalogs />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
