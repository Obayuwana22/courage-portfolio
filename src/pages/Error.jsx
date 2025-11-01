import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const status = error.status;
  console.log(error);

  return (
    <div className="flex flex-col justify-center items-center text-center text-black dark:text-white h-screen">
      <div className={`${status && "text-[#ff4500]"}`}>
        {error.status} {error.statusText}
      </div>

      <div className="mb-5 ">
        {status === 404
          ? "Sorry, this page does not exist"
          : "Something went wrong"}
      </div>
      <Link to="/" className="border border-[#ff4500] px-3 rounded-md">
        Back
      </Link>
    </div>
  );
};

export default Error;
