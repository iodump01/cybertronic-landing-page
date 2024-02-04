import React from "react";
import Meta from "./Meta";

const NotFound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column p-4">
      <Meta title={"404! Not Found - IODump"}/>
      <h1 className="fw-bold">404!</h1>
      <h2 className="text-warning">The page you are looking is just ran away!!!</h2>
    </div>
  );
};

export default NotFound;
