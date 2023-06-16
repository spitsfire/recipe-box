import { useState } from "react";
import TabList from "./TabList";
import Card from "./Card";
import recipes from "./../data/recipes";

const Box = () => {
  const [selectedRecipe, setSelectedRecipe] = useState({
    ingredients: [],
    instructions: "",
  });
  // this is for changing the css for the active Tab
  const [selectedTab, setSelectedTab] = useState(0);

  const getId = (id) => {
    let ingredients = [];
    let instructions = "";
    for (const recipe of recipes) {
      if (recipe.id === id) {
        ingredients = recipe.extendedIngredients;
        instructions = recipe.instructions;
      }
    }
    setSelectedTab(id);
    setSelectedRecipe({ ingredients, instructions });
  };
  return (
    <div className='box container bg-info py-2'>
      <TabList recipes={recipes} getId={getId} selectedTab={selectedTab} />
      <Card selectedRecipe={selectedRecipe} />
    </div>
  );
};

export default Box;
