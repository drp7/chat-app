import React from "react";
import { useState } from "react";

import Register from "../components/Register";

export default function HomePage() {
  const [account, setAccount] = useState(true);
  return (
    <div className="w-full min-h-screen grid justify-items-center content-center gap-6 bg-gradient-to-br from-fuchsia-700  to-cyan-800  p-4">
      <section className="max-w-lg w-full text-center  bg-white/30 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-worksans font-extralight text-lime-200  p-4 tracking-wide sm:tracking-[0.5rem] ">
          ChatsApp
        </h1>
      </section>
      <section className="max-w-lg w-full text-center bg-white/30 rounded-lg text-lime-200 p-4 relative h-auto space-y-4 ">
        <ul class="flex w-8/12  rounded-full mx-auto ring-1 ring-lime-300  text-lime-200 relative    ">
          <li
            onClick={() => setAccount(true)}
            className="w-1/2 py-2 rounded-full relative overflow-hidden sm:tracking-[0.5rem] cursor-pointer "
          >
            <span
              className={`${
                account ? "translate-x-0" : "-translate-x-full"
              } inset-0 grid place-content-center absolute bg-gradient-to-r rounded-full    transition duration-300 ease-in-out`}
            >
              Login
            </span>
            Login
          </li>
          <span className="text-2xl ">|</span>
          <li
            onClick={() => {
              setAccount(false);
            }}
            className="w-1/2 py-2 rounded-full  relative overflow-hidden sm:tracking-[0.5rem] cursor-pointer  "
          >
            <span
              className={`${
                !account ? "translate-x-0" : "translate-x-full"
              } inset-0 grid place-content-center absolute bg-gradient-to-r rounded-full  transition duration-300 ease-in-out`}
            >
              Signup
            </span>
            Signup
          </li>
        </ul>
        <Register account={account} />
      </section>
    </div>
  );
}
