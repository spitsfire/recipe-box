import React from "react";
import Tab from "./Tab";

const TabList = ({ recipes, getId, selectedTab }) => {
  const TabsList = recipes.map((recipe) => {
    return (
      <Tab
        title={recipe.title}
        id={recipe.id}
        key={recipe.id}
        getId={getId}
        // this is for css styling the active Tab
        // if the selected tab id is the same as the curr recipe
        // id, then it will return true or false
        isActive={selectedTab === recipe.id}
      />
    );
  });
  return <div className='container'>{TabsList}</div>;
};

export default TabList;
