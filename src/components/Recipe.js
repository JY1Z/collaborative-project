import React from 'react';

function Recipe({ recipe, onDelete }) {
    const { name, ingredients, instructions } = recipe;

    return (
        <div className="recipe">
            <h3>{name}</h3>
            <p><strong>Ingredients:</strong> {ingredients}</p>
            <p><strong>Instructions:</strong> {instructions}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default Recipe;
