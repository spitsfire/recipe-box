import React from "react";
import "./Tab.css";

const Tab = (props) => {
  const { selectTab, recipe } = props;
  return (
    <div
      className="tab container bg-warning p-1 mb-1"
      onClick={() => selectTab(recipe)}
    >
      <h5>{recipe.title}</h5>
    </div>
  );
};

export default Tab;
