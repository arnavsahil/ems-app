import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
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
