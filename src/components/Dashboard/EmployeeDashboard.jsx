import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeDashboard = ({ loggedEmployee }) => {
  const navigate = useNavigate();
  const bgArray = [
    "bg-amber-500",
    "bg-amber-300",
    "bg-amber-800",
    "bg-amber-950",
  ];
  const handleLogOut = () => {
    console.log("log out success");
    navigate("/login");
  };
  //console.log(loggedEmployee.employees);
  

  return (
    <div className="h-screen w-screen bg-black p-10">
      <div className="header flex items-center justify-between">
        <div>
          <h4 className="text-xl font-semibold text-white">Hello</h4>
          <h4 className="text-2xl font-bold text-white">
            {loggedEmployee ? loggedEmployee.firstName : "Employee"}👋
          </h4>
        </div>
        <button
          onClick={handleLogOut}
          className="text-md font-semibold text-white px-5 py-2 rounded-xl bg-[#7C0000]"
        >
          Log Out
        </button>
      </div>

      <div className="tasklistNumbers w-full flex gap-6 py-10">
        <div className="bg-amber-500 h-32 w-1/4 rounded-xl p-6">
          <h4 className="text-3xl font-bold text-white">
            {loggedEmployee.taskCounts.newTask}
          </h4>
          <h4 className="text-2xl font-semibold text-white">New Task</h4>
        </div>
        <div className="bg-amber-300 h-32 w-1/4 rounded-xl p-6">
          <h4 className="text-3xl font-bold text-white">
            {loggedEmployee.taskCounts.completed}
          </h4>
          <h4 className="text-2xl font-semibold text-white">Completed Task</h4>
        </div>
        <div className="bg-amber-800 h-32 w-1/4 rounded-xl p-6">
          <h4 className="text-3xl font-bold text-white">
            {loggedEmployee.taskCounts.active}
          </h4>
          <h4 className="text-2xl font-semibold text-white">Active Task</h4>
        </div>
        <div className="bg-amber-950 h-32 w-1/4 rounded-xl p-6">
          <h4 className="text-3xl font-bold text-white">
            {loggedEmployee.taskCounts.failed}
          </h4>
          <h4 className="text-2xl font-semibold text-white">Failed Task</h4>
        </div>
      </div>

      <div
        id="taskList"
        className="tasklist overflow-x-auto items-center justify-start w-full flex gap-6 h-[45%]"
      >
        {loggedEmployee.tasks.map((task, index) => (
          <div
            key={index}
            className={`${bgArray[index % bgArray.length]} w-[25%] h-full shrink-0 rounded-xl p-6 py-4`}
          >
            <div className="flex items-center justify-between">
              <button className="text-white text-xs px-3 py-1 rounded-sm bg-[#c61d1d]">
                {task.category}
              </button>
              <h4 className="text-xs text-white">{task.taskDate}</h4>
            </div>
            <h4 className="text-xl font-semibold text-white mt-3">
              {task.taskTitle}
            </h4>
            <p className="text-xs mt-2 text-white">{task.taskDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
