import React from "react";
import Tab from "./Tab";

const TabList = (props) => {
  const recipes = props.allRecipes;
  const { selectedRecipe } = props;
  return (
    <div className="container">
      {recipes.map((r) => (
        <Tab recipe={r} selectTab={props.selectTab} isSelected={selectedRecipe.id === r.id} />
      ))}
    </div>
  );
};

export default TabList;
