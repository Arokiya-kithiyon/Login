import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // localStorage.removeItem("user");
    const userDetails = localStorage.getItem("user");
    if (userDetails) {
      const parsedUser = JSON.parse(userDetails);
      console.log(parsedUser);

      setName(parsedUser.name);
    }
  }, []);

  useEffect(() => {
    console.log(name);

    if (!name) {
      navigate("/login");
    }
  }, [name, navigate]);

  return (
    <div className="mt-5">
      <h1>Welcome {name}</h1>
    </div>
  );
}

export default Home;
