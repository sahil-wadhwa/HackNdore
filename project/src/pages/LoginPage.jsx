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
      axios.post("http://localhost:9002/login", user)
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
      <img className="w-screen h-screen absolute z-[-1]" src={require('../assets/bg.jpg')} alt="bg"></img>
      <div className="w-[30vw] h-[70vh] flex flex-col justify-center items-center  rounded-lg self-end mr-[10vw]">
      <h1 className="text-[5vh] uppercase font-serif">Login</h1>
      <input className="border-2 w-[20vw] h-[7vh] m-4 text-center rounded-lg"
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your email"
        onChange={handleChange}
      ></input>
      <input className="border-2 w-[20vw] h-[7vh] m-4 text-center rounded-lg"
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={handleChange}
      ></input>
      <div className="flex flex-row">
        <div className="checkbox-wrapper ">
            <input
            type="checkbox"
            id="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            />
        <span className="w-[2vw]"></span>
        <label htmlFor="checkbox">
          I agree to the <a href="https://www.w3schools.com">terms</a> and{" "}
          <a href="https://www.google.com">conditions</a>
        </label>
        </div>
      </div>
      <div className="button w-[10vw] h-[7vh] bg-blue-600 rounded-lg flex items-center justify-center font-extrabold text-white m-4 cursor-pointer" onClick={login}>Login</div>
      <div className="uppercase font-extrabold">or</div>
      <div className="button w-[8vw] h-[5vh] bg-blue-600 rounded-lg flex items-center justify-center font-extrabold text-white m-4 cursor-pointer" onClick={() => navigate("/register")}>Register</div>
    </div>
      </div>
     
  );
};

export default LoginPage;