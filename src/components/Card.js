import React from "react";

const Card = () => {
  return (
    <div className='container bg-light p-1'>
      <div className='row'>
        <div className='col'>
          <h4>Ingredients</h4>
          <ul>{}</ul>
        </div>
        <div className='col'>
          <h4>Instructions</h4>
          {}
        </div>
      </div>
    </div>
  );
};

export default Card;
