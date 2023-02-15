import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
        <div className='menu' style={{margin: 5}}>
        <Link style={{margin: 5}} to='/'>Home </Link>
        <Link style={{margin: 5}} to='/login'>Login </Link>
        <Link style={{margin: 5}} to='/registration'> Registration </Link>
      </div>
    
        <Routes>
        <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
