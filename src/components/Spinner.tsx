import React from "react";
import "./Spinner.scss";

const Spinner: React.FC = () => {
  return (
    <div className="spinner container px-4 px-lg-5 text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
