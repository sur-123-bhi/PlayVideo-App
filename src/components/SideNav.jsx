import React from "react";
import userImg from "../assets/react.svg";

const SideNav = () => {
  return (
    <div className="flex flex-col w-1/5 h-screen items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-8 fixed">
      <div className="flex flex-col items-center space-y-2">
        <img
          src={userImg}
          className="w-24 h-24 rounded-full"
          alt="user image"
        />
        <h1 className="text-2xl font-bold">Surbhi Haldar</h1>
        <a href="https://mail.google.com/" target="_blank">haldarsurbhi@gmail.com</a>
      </div>
      <div className="w-fit flex flex-col mt-12 gap-6">
        <a href="#" className="w-full  text-xl">
          Home
        </a>
        <a href="#" className="w-full  text-xl">
          Subscription
        </a>
      </div>

      <div className="w-fit flex flex-col mt-12 gap-6">
        <a href="#" className="w-full  text-xl">
          Your Channel
        </a>
        <a href="#" className="w-full  text-xl">
          Watch Later
        </a>
        <a href="#" className="w-full  text-xl">
          History
        </a>
        <a href="#" className="w-full text-xl">
          Your Videos
        </a>
        <a href="#" className="w-full text-xl">
          More
        </a>
      </div>
    </div>
  );
};

export default SideNav;
