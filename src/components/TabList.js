import React from "react";
import Tab from "./Tab";

const TabList = (props) => {
  const recipes = props.allRecipes;
  return (
    <div className='container'>
      {recipes.map((r) => (
        <Tab recipe={r} />
      ))}
    </div>
  );
};

export default TabList;
