import React, { useState, useEffect } from "react";
import axios from "axios";
import TabList from "./TabList";
import Card from "./Card";

const Box = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  const selectTab = (recipe) => {
    setSelectedRecipe(recipe);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?apiKey=e9e571deee31402faeed1d453f7cd52f&number=8"
      )
      .then((response) => {
        setRecipes(response.data.recipes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="box container bg-info py-2">
      <TabList allRecipes={recipes} selectTab={selectTab} />
      <Card selectedRecipe={selectedRecipe} />
    </div>
  );
};

export default Box;
