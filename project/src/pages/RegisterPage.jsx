import React, { useState } from "react";
// import "./register.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const register = () => {
    if (isChecked) {
      const { name, email, password, reEnterPassword } = user;
      if (name && email && password && password === reEnterPassword) {
        axios.post("http://localhost:9002/register", user)
          .then((res) => {
            alert(res.data.message);
            navigate("/login");
          })
          .catch((error) => {
            alert(error.message);
          });
      } else {
        alert("Invalid input from your end");
      }
    } else {
      alert("Please agree to the terms and conditions.");
    }
  };

  return (
    <div className= " flex flex-col register items-center justify-center w-screen h-screen ">
      <h1 className="mb-2 font-serif text-[7vh] uppercase">Register</h1>
      <div className = " flex flex-col gap-5 justify-center items-center w-[27vw] h-[50vh]">
       <input className="rounded-lg text-center border-2 h-[7vh] w-[20vw]"
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter your name"
        onChange={handleChange}
       ></input>
       <input className="rounded-lg border-2 text-center h-[7vh] w-[20vw]"
        type="text"
        name= "email"
        value={user.email}
        placeholder="Enter your Email"
        onChange={handleChange}
      ></input>
      <input className="rounded-lg border-2 text-center h-[7vh] w-[20vw]"
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={handleChange}
      ></input>
      <input className="rounded-lg  border-2 text-center h-[7vh] w-[20vw]"
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter your password"
        onChange={handleChange}
      ></input>
      </div>
      
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="checkbox">
          I agree to the <a href="https://www.google.com">terms</a> and{" "}
          <a href="https://www.google.com">conditions</a>
        </label>
      </div>
      <button className=" border-2 rounded-lg bg-blue-600 items-center  text-white justify-center flex  w-[10vw] h-[7vh] button" onClick={register}>Register</button>
      <div>or</div>
      <div className="border-2 rounded-lg bg-blue-600 items-center  text-white justify-center flex  w-[8vw] h-[5vh] button" onClick={() => navigate('/login')}>Login</div>
    </div>
  );
};

export default RegisterPage;