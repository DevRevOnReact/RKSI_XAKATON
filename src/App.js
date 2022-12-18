import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import LoginStaff from "./components/Staff/LoginStaff/LoginStaff";
import StaffAcc from "./components/Staff/StaffAcc";
import StaffCatalogs from "./components/Staff/StaffCatalogs";
import Admin from "./components/Admin/Admin";
import CreateStaff from "./components/Admin/CreateStaff/CreateStaff";
import {useState} from "react";
import Modal from "./components/ui/Modal";
import CreateStaffPage from "./components/Admin/CreateStaff/CreateStaffPage";
import SelectTableComponent from "./components/Admin/CreateStaff/CreateStaffPage";
import Login from "./components/Login";




function App() {
const [modalActive, setModalActive] = useState('')
  return (
      <div className="App">


        {/*  <LoginStaff />*/}
        {/*   <StaffAcc/>*/}
        {/* <StaffCatalogs />*/}
{/*<Admin />*/}

          {/*<CreateStaffPage />*/}
          <SelectTableComponent />

          {/*/!*<Login />*!/*/}
          {/*  <CreateStaff />*/}
      </div>
  );
}

export default App;
