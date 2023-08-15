import React from 'react';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import LoginForm from './routes/Login';
import Dashboard from './routes/Dashboard';
import { createRoot } from 'react-dom/client'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginForm/>} />
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')!).render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
