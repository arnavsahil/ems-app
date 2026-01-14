import React from "react";

const EmployeeDashboard = () => {
  return (
    <div className="h-screen w-screen bg-black p-10">
      <div className="header flex items-center justify-between">
        <div>
          <h4 className="text-xl font-semibold text-white">Hello</h4>
          <h4 className="text-2xl font-bold text-white">Arnav👋</h4>
        </div>
        <button className="text-md font-semibold text-white px-5 py-2 rounded-xl bg-[#7C0000]">
          Log Out
        </button>
      </div>

      <div className="tasklistNumbers w-full flex gap-6 py-10">
        <div className="bg-amber-500 h-32 w-1/4 rounded-xl p-6">
          <h4 className="text-3xl font-bold text-white">0</h4>
          <h4 className="text-2xl font-semibold text-white">New Task</h4>
        </div>
        <div className="bg-amber-300 h-32 w-1/4 rounded-xl p-6">
          <h4 className="text-3xl font-bold text-white">0</h4>
          <h4 className="text-2xl font-semibold text-white">New Task</h4>
        </div>
        <div className="bg-amber-800 h-32 w-1/4 rounded-xl p-6">
          <h4 className="text-3xl font-bold text-white">0</h4>
          <h4 className="text-2xl font-semibold text-white">New Task</h4>
        </div>
        <div className="bg-amber-950 h-32 w-1/4 rounded-xl p-6">
          <h4 className="text-3xl font-bold text-white">0</h4>
          <h4 className="text-2xl font-semibold text-white">New Task</h4>
        </div>
      </div>

      <div
        id="taskList"
        className="tasklist overflow-x-auto items-center justify-start w-full flex gap-6 h-[45%]"
      >
        <div className="bg-amber-500 w-[25%] h-full shrink-0 rounded-xl p-6 py-4">
          <div className="flex items-center justify-between">
            <button className="text-white text-xs px-3 py-1 rounded-sm bg-[#c61d1d]">
              High
            </button>
            <h4 className="text-xs text-white">14 jan 2026</h4>
          </div>
          <h4 className="text-xl font-semibold text-white mt-3">
            Make a youtube video
          </h4>
          <p className="text-xs mt-2 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            corporis esse excepturi numquam exercitationem quidem alias quod
            expedita maxime tempora!
          </p>
        </div>
        <div className="bg-amber-300 w-[25%] h-full shrink-0 rounded-xl p-6 py-4">
          <div className="flex items-center justify-between">
            <button className="text-white text-xs px-3 py-1 rounded-sm bg-[#c61d1d]">
              High
            </button>
            <h4 className="text-xs text-white">14 jan 2026</h4>
          </div>
          <h4 className="text-xl font-semibold text-white mt-3">
            Make a youtube video
          </h4>
          <p className="text-xs mt-2 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            corporis esse excepturi numquam exercitationem quidem alias quod
            expedita maxime tempora!
          </p>
        </div>
        <div className="bg-amber-800 w-[25%] h-full shrink-0 rounded-xl p-6 py-4">
          <div className="flex items-center justify-between">
            <button className="text-white text-xs px-3 py-1 rounded-sm bg-[#c61d1d]">
              High
            </button>
            <h4 className="text-xs text-white">14 jan 2026</h4>
          </div>
          <h4 className="text-xl font-semibold text-white mt-3">
            Make a youtube video
          </h4>
          <p className="text-xs mt-2 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            corporis esse excepturi numquam exercitationem quidem alias quod
            expedita maxime tempora!
          </p>
        </div>
        <div className="bg-amber-950 w-[25%] h-full shrink-0 rounded-xl p-6 py-4">
          <div className="flex items-center justify-between">
            <button className="text-white text-xs px-3 py-1 rounded-sm bg-[#c61d1d]">
              High
            </button>
            <h4 className="text-xs text-white">14 jan 2026</h4>
          </div>
          <h4 className="text-xl font-semibold text-white mt-3">
            Make a youtube video
          </h4>
          <p className="text-xs mt-2 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            corporis esse excepturi numquam exercitationem quidem alias quod
            expedita maxime tempora!
          </p>
        </div>
        <div className="bg-amber-500 w-[25%] h-full shrink-0 rounded-xl p-6 py-4">
          <div className="flex items-center justify-between">
            <button className="text-white text-xs px-3 py-1 rounded-sm bg-[#c61d1d]">
              High
            </button>
            <h4 className="text-xs text-white">14 jan 2026</h4>
          </div>
          <h4 className="text-xl font-semibold text-white mt-3">
            Make a youtube video
          </h4>
          <p className="text-xs mt-2 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            corporis esse excepturi numquam exercitationem quidem alias quod
            expedita maxime tempora!
          </p>
        </div>
        <div className="bg-amber-300 w-[25%] h-full shrink-0 rounded-xl p-6 py-4">
          <div className="flex items-center justify-between">
            <button className="text-white text-xs px-3 py-1 rounded-sm bg-[#c61d1d]">
              High
            </button>
            <h4 className="text-xs text-white">14 jan 2026</h4>
          </div>
          <h4 className="text-xl font-semibold text-white mt-3">
            Make a youtube video
          </h4>
          <p className="text-xs mt-2 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            corporis esse excepturi numquam exercitationem quidem alias quod
            expedita maxime tempora!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
