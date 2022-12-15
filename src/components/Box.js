import React, { useState } from "react";
import TabList from "./TabList";
import Card from "./Card";
import recipesList from "./../data/recipes";

const Box = () => {
  const [recipes, setRecipes] = useState(recipesList);

  return (
    <div className='box container bg-info py-2'>
      <TabList allRecipes={recipes} />
      <Card />
    </div>
  );
};

export default Box;
