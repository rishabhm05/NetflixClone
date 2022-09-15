import React from "react";
import { UserAuth } from "../Context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const { signIn } = UserAuth();
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (e) {
      seterror(e.message);
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center signup ">
      <div className="bg-[rgba(0,0,0,.75)] md:w-[450px] h-[600px] w-[300px]  z-5 relative error">
        {error && <h1 className="text-white mx-2 my-2">{error}</h1>}
        <h1 className="text-[#ffffff] font-bold text-3xl mx-5 my-10 text-left ">
          Sign In
        </h1>

        <form onSubmit={handlesubmit}>
          <input
            type="email"
            placeholder="Email"
            className="block mx-5 my-10 bg-gray-700 py-2 w-[80%] px-2 rouded"
            onChange={(e) => setemail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="mx-5 my-10 bg-gray-700 w-[80%] px-2 rouded py-2 text-white"
            onChange={(e) => setpassword(e.target.value)}
          ></input>
          <button className="bg-red-600 text-white py-2 px-6 rouded w-[80%] text-center mx-5 my-5 white">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
