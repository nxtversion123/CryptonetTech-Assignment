import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <p
        className="text-center"
        style={{
          marginBottom: "",
          // display: "flex",
          fontSize: "xxx-large",
          fontWeight: "600",
          color: "crimson",
          position: "relative",
          top: "130px",
        }}
      >
        Loading...
      </p>
      <img className="" src={loading} alt="loading" />
    </div>
  );
};
export default Spinner;
