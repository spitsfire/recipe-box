import React from "react";

const Card = (props) => {
  const { selectedRecipe } = props;
  return (
    <div className="container bg-light p-1">
      <div className="row">
        <div className="col">
          <h4>Ingredients</h4>
          <ul>
            {selectedRecipe.extendedIngredients
              ? selectedRecipe.extendedIngredients.map((item) => (
                  <li>{item.original}</li>
                ))
              : null}
          </ul>
        </div>
        <div className="col">
          <h4>Instructions</h4>
          {selectedRecipe.instructions}
        </div>
      </div>
    </div>
  );
};

export default Card;
