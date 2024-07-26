import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const login = () => {
    if (isChecked) {
      axios.post("localhost:9002/login", user)
        .then((res) => {
          alert(res.data.message);
          setLoginUser(res.data.user);
          navigate('/');
        })
        .catch((error) => {
          alert("An error occurred. Please try again.");
        });
    } else {
      alert("Please agree to the terms and conditions.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="login w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-[5vh] uppercase font-extrabold">Login</h1>
      <input className="border-2 "
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your email"
        onChange={handleChange}
      ></input>
      <input className="border-2"
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={handleChange}
      ></input>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="checkbox">
          I agree to the <a href="https://www.w3schools.com">terms</a> and{" "}
          <a href="https://www.google.com">conditions</a>
        </label>
      </div>
      <div className="button" onClick={login}>Login</div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/register")}>Register</div>
    </div>
  );
};

export default LoginPage;