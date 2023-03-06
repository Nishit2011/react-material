import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuiTypography from './components/MuiTypography';
import MuiButton from './components/MuiButton';
import MuiTextField from './components/MuiTextField';
import MuiSelect from './components/MuiSelect';
import MuiRadioButton from './components/MuiRadioButton';
import MuiCheckbox from './components/MuiCheckbox';
import MuiNavbar from './components/MuiNavbar';
import MuiLink from './components/MuiLink';
import MuiLayout from './components/MuiLayout';

import LoginPage from './components/Login';
import UserForm from './components/UserForm';

import DashboardPage from './components/Dashboard';



function App() {
  return (
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MuiTextField /> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckbox /> */}
      {/* <MuiNavbar /> */}
      {/* <MuiLink /> */}
      <MuiLayout />
      {/* <LoginPage /> */}
      {/* <UserForm /> */}
      {/* <DashboardPage /> */}
    </div>
  );
}

export default App;
