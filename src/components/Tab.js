import React from "react";
import "./Tab.css";

const Tab = ({ title, id, getId, isActive }) => {
  return (
    <div
      className={`tab container bg-warning p-1 mb-1 ${
        isActive ? "active" : ""
      }`}
      onClick={() => getId(id)}
    >
      <h5>{title}</h5>
    </div>
  );
};

export default Tab;
