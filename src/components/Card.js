import React from "react";

const Card = ({ selectedRecipe }) => {
  const { instructions, ingredients } = selectedRecipe;
  const IngredientsList = ingredients.map((ing) => {
    return <li>{ing.name}</li>;
  });

  return (
    <div className='container bg-light p-1'>
      <div className='row'>
        <div className='col'>
          <h4>Ingredients</h4>
          <ul>{IngredientsList}</ul>
        </div>
        <div className='col'>
          <h4>Instructions</h4>
          {instructions}
        </div>
      </div>
    </div>
  );
};

export default Card;
