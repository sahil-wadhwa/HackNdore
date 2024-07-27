import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios';

function App() {
  const [user, setLoginUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:9002/protected', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        setLoginUser(res.data);
      })
      .catch(err => {
        console.error("Error verifying token:", err);
        localStorage.removeItem('token');
        setLoginUser(null);
      });
    }
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={user ? <HomePage setLoginUser={setLoginUser} /> : <LoginPage setLoginUser={setLoginUser} />} />

      <Route path="/login" element={<LoginPage setLoginUser={setLoginUser} />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;