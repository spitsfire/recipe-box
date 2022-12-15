import React, { useState } from "react";
import TabList from "./TabList";
import Card from "./Card";
import recipeList from "./../data/recipes";

const Box = () => {
  const [recipes, setRecipes] = useState(recipeList);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  const selectTab = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className='box container bg-info py-2'>
      <TabList allRecipes={recipes} selectTab={selectTab} />
      <Card selectedRecipe={selectedRecipe} />
    </div>
  );
};

export default Box;
