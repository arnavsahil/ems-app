import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    //console.log("form submitted");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="bg-[#212121] border border-white w-72 h-104 py-8 px-4 rounded-xl">
        <h4 className="text-lg font-bold text-white">Log In</h4>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="mt-20 flex flex-col gap-4"
        >
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Email"
            className="w-full rounded-4xl border border-[#7C0000] text-gray-100 px-3 py-1 text-sm"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="Password"
            className="w-full rounded-4xl border border-[#7C0000] text-gray-100 px-3 py-1 text-sm"
          />
          <button className="mt-8 rounded-4xl bg-[#7C0000] px-8 py-2 w-full text-white font-semibold">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
