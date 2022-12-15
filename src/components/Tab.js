import React from "react";
import "./Tab.css";

const Tab = (props) => {
  const { selectTab, recipe, isSelected } = props;
  return (
    <div
      className={`tab container p-1 mb-1 ${isSelected ? 'active': ''}`}
      onClick={() => selectTab(recipe)}
    >
      <h5>{recipe.title}</h5>
    </div>
  );
};

export default Tab;
