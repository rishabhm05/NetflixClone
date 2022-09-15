import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const SignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      seterror(e.message);
      // let err = `<h2 className ="text-white">${error}</h2>`;
      // const html = document.querySelector(".error");
      // html.insertAdjacentHTML(`afterbegin`, err);
      // console.log(html);
      // console.log(err);
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center signup ">
      <div className="bg-[rgba(0,0,0,.75)] md:w-[450px] h-[600px] w-[300px]  z-5 relative error">
        {error && <h1 className="text-white mx-2 my-2">{error}</h1>}
        <h1 className="text-[#ffffff] font-bold text-3xl mx-5 my-10 text-left ">
          Sign Up
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
