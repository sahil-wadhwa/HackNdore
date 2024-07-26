import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';



function App() {
  const[user,setLoginUser]=useState({});

  return (
    <Routes>
          <Route exact path="/" element={user && user._id ? <HomePage user={setLoginUser} /> : <LoginPage setLoginUser={setLoginUser} />} />
          <Route path="/login" element={<LoginPage setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
    
  );
}

export default App;
