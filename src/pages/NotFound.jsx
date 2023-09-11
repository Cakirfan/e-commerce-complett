import React from "react";
import notImage from "../helpers/notFound.jpeg";
const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={notImage} alt="NotFound" />
    </div>
  );
};

export default NotFound;
