import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const userData = useContext(AuthContext);
  console.log(userData.employees);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(taskTitle);
    console.log(date);
    console.log(assignTo);
    console.log(category);
    console.log(description);
    // setTaskTitle("");
    // setDate("");
    // setAssignTo("");
    // setCategory("");
    // setDescription("");
  };

  const handleLogOut = () => {
    navigate("/login");
  };
  return (
    <div className="h-screen w-screen bg-black px-10 py-4 flex flex-col gap-4">
      <div className="header flex items-center justify-between">
        <div>
          <h4 className="text-xl font-semibold text-white">Hello</h4>
          <h4 className="text-2xl font-bold text-white">Arnav👋</h4>
        </div>
        <button
          onClick={handleLogOut}
          className="text-md font-semibold text-white px-5 py-2 rounded-xl bg-[#7C0000]"
        >
          Log Out
        </button>
      </div>

      <div className="create-task w-full h-[55%] bg-[#1b1b1c] px-8 py-4 rounded-md">
        <form
          action=""
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex justify-between text-white items-center"
        >
          <div>
            <h3 className="text-xs">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI Design"
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="mt-1 border text-xs px-2 py-1 w-96 rounded-md"
            />

            <h3 className="text-xs mt-3">Date</h3>
            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="mt-1 border text-xs px-2 py-1 w-96 rounded-md"
            />

            <h3 className="text-xs mt-3">Assign To</h3>
            <input
              type="text"
              placeholder="employee name"
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="mt-1 border text-xs px-2 py-1 w-96 rounded-md"
            />

            <h3 className="text-xs mt-3">Category</h3>
            <input
              type="text"
              placeholder="design, dev, build"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="mt-1 border text-xs px-2 py-1 w-96 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xs">Description</h3>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="mt-1 border rounded-md text-xs px-2 py-1 w-96 h-32"
            ></textarea>
            <button className="mt-3 py-3 text-xs flex items-center justify-center rounded-md bg-green-800">
              Create Task
            </button>
          </div>
        </form>
      </div>

      <div
        id="allTasks"
        className="all-tasks p-6 flex flex-col gap-2 overflow-y-auto w-full h-[44%] bg-[#1b1b1c] rounded-md text-white"
      >
        <div className="bg-[#E97A74] flex py-2 rounded-md justify-around -mt-2">
          <h4 className="text-sm font-semibold">Employee Name</h4>
          <h4 className="text-sm font-semibold">New Task</h4>
          <h4 className="text-sm font-semibold">Active Task</h4>
          <h4 className="text-sm font-semibold">Completed Task</h4>
          <h4 className="text-sm font-semibold">Failed Task</h4>
        </div>
        {userData.employees &&
          userData.employees.map((e, index) => {
            return (
              <div key={index} className="border-[#54B588] border flex p-2 rounded-md justify-around">
                <h4 className="text-sm font-semibold">{e.firstName}</h4>
                <h4 className="text-sm font-semibold">
                  {e.taskCounts.newTask}
                </h4>
                <h4 className="text-sm font-semibold">{e.taskCounts.active}</h4>
                <h4 className="text-sm font-semibold">
                  {e.taskCounts.completed}
                </h4>
                <h4 className="text-sm font-semibold">{e.taskCounts.failed}</h4>
              </div>
            );
          })}
        {/* <div className="border-[#54B588] border flex p-2 rounded-md justify-around">
          <h4 className="text-sm font-semibold">Arnav</h4>
          <h4 className="text-sm font-semibold">1</h4>
          <h4 className="text-sm font-semibold">2</h4>
          <h4 className="text-sm font-semibold">1</h4>
          <h4 className="text-sm font-semibold">0</h4>
        </div> */}
        {/* {userData.employees.tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-3 w-full rounded-md bg-amber-500"
          >
            <h4 className="text-xs">{task.taskTitle}</h4>
            <h4 className="text-xs">{task.taskTitle}</h4>
            <h4 className="text-xs">{task.category}</h4>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default AdminDashboard;
