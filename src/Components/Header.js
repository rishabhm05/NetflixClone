import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();
  const handlelogout = async () => {
    try {
      await logout();
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="flex my-2  items-center justify-between fixed w-full z-[10]">
      <Link to="/">
        <h1 className="text-red-600 font-bold text-4xl px-2 mr-2 cursor-pointer ">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div className=" px-2 mr-2">
          <button
            className="bg-white-600  text-white py-2 px-2 text-xl"
            onClick={() => navigate("/Account")}
          >
            Account
          </button>
          <button
            className="bg-red-600 text-white py-2 px-6 rounded text-center"
            onClick={handlelogout}
          >
            SignOut
          </button>
        </div>
      ) : (
        <div className=" px-2 mr-2">
          <button
            className="bg-white-600  text-white py-2 px-2 text-xl"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </button>
          <button
            className="bg-red-600 text-white py-2 px-6 rounded text-center"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
