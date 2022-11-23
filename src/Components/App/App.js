import React from "react";
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import Login from '../Login/Login';
import Validation from '../Validation/Validation';
import Home from '../Home/Home';
import "./App.css";


function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      setisAuthenticated(true);
    }
  }, [isAuthenticated]);

  

 if(isAuthenticated === true) {
  return (
    <div className="App">
      <Nav />
      <div className="main">
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/validation" element={<Validation />} />
      </Routes>

      </div>

      </div>
  )

 } else {
  return (
    <div className="App">
 <Login setisAuthenticated={setisAuthenticated}/>
    </div>
  );
 }
}

export default App;
