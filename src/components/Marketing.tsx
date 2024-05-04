import React from "react";
import Trusted from "./Trusted";

const Marketing = () => {
  return (
    <div>
      <Trusted />

      <div className="py-16  bg-gray-100/50 mb-16">
        <div className="mx-auto max-w-screen-xl px-4 border-2 border-blue-600 rounded py-3 bg-blue-400/30  text-gray-500 sm:px-6 lg:px-8">
          <div className=" flex items-center justify-between w-full">
            <p className="text-center font-medium sm:text-left">
              Love Alpine JS?
              <br className="sm:hidden" />
              Check out this new deep dive course!
            </p>

            <button className="mt-4 rounded-lg hover:bg-blue-600 duration-300 cursor-pointer bg-transparent border-2 border-blue-600 px-5 py-3 text-center text-sm font-medium text-blue-600 transition hover:text-white focus:outline-none focus:ring  sm:mt-0">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
