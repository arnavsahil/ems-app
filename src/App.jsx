import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedEmployee, setLoggedEmployee] = useState(null);
  const navigate = useNavigate();

  const authData = useContext(AuthContext);
  //console.log(authData.employees);

  //console.log(authData && authData.employees.find((e)=>{e.email == email && e.password ==}));

  const handleLogin = (email, password) => {
    //console.log(email, password);
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      setLoggedEmployee(null);
      navigate("/dash-admin");
      console.log("this is admin");
    } else if (authData && authData.employees) {
      const employee = authData.employees.find(
        (e) => e.email == email && e.password == password,
      );
      if (employee) {
        setUser("employee");
        setLoggedEmployee(employee);
        navigate("/dash-employee");
        console.log("this is employee");
      }
    } else {
      alert("Invalid Credentials");
    }
  };
  //handleLogin("admin@me.com", "123");
  // console.log(data);

  // useEffect(() => {
  //   //setLocalStorage();
  //   getLocalStorage();
  // },);

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<Login handleLogin={handleLogin}></Login>}
        ></Route>
        <Route
          path="/dash-employee"
          element={
            <EmployeeDashboard
              loggedEmployee={loggedEmployee}
            ></EmployeeDashboard>
          }
        ></Route>
        <Route
          path="/dash-admin"
          element={
            <AdminDashboard></AdminDashboard>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
