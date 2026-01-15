import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    //console.log(email, password);
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      navigate("/dash-admin");
      console.log("this is admin");
    } else if (email == "emp@e.com" && password == "123") {
      setUser("employee");
      navigate("/dash-employee");
      console.log("this is employee");
    } else {
      alert("Invalid Credentials");
    }
  };
  //handleLogin("admin@me.com", "123");
  // console.log(data);

  useEffect(() => {
    //setLocalStorage();
    getLocalStorage();
  },);

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<Login handleLogin={handleLogin}></Login>}
        ></Route>
        <Route
          path="/dash-employee"
          element={<EmployeeDashboard></EmployeeDashboard>}
        ></Route>
        <Route
          path="/dash-admin"
          element={<AdminDashboard></AdminDashboard>}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
