import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Main from "./components/Main";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import "./App.css";

function App() {
  const [userInfo, setUserinfo] = useState("");

  //Signout from firebase

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUserinfo(`Belépve: ${uid}`);
      } else {
        setUserinfo("Kilépve");
      }
    });
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <div className='menu' style={{ margin: 5 }}>
          <Link style={{ margin: 5 }} to='/'>
            Home{" "}
          </Link>
          <Link style={{ margin: 5 }} to='/login'>
            Login{" "}
          </Link>
          <Link style={{ margin: 5 }} to='/registration'>
            {" "}
            Registration{" "}
          </Link>
        </div>
        <span>{userInfo}</span>
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
