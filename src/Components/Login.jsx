import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const users = [
    { name: "Arun", email: "arun@gmail.com", pw: "4001" },
    { name: "Franko", email: "franko@gmail.com", pw: "4002" },
    { name: "Robin", email: "robin@gmail.com", pw: "4003" },
    { name: "Vinoth", email: "vinoth@gmail.com", pw: "4004" },
    { name: "Jack", email: "jack@gmail.com", pw: "4005" },
  ];

  const [input, setInput] = useState({ email: "", pw: "" });
  const navigate = useNavigate();

  const validateUser = () => {
    if (input.email === "" || input.pw === "") {
      alert("Please fill the required fields");
      return;
    }

    const user = users.find(
      (user) => user.email === input.email && user.pw === input.pw
    );

    if (user) {
      alert("Successfully logged in");

      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } else {
      alert("Please enter your registered email and password");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Log In</h3>
      <div className="inputs">
        <input
          value={input.email}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, email: e.target.value }))
          }
          type="text"
          placeholder="Email"
        />
        <input
          value={input.pw}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, pw: e.target.value }))
          }
          type="password"
          placeholder="Password"
        />
      </div>
      <button className="btn btn-primary" onClick={validateUser}>
        Log In
      </button>
    </div>
  );
}

export default Login;
