import React from 'react';

export default function RecipeCard({ ...props }){
    return (
        <div className = 'recipeCard'>
            { props.recipeData.description }
            <h2> { props.recipeData.title } </h2>
            <p> { props.recipeData.author }</p>
            <p> { props.recipeData.description } </p>
            <p>Dietary Restrictions:</p>
            <ul>
                { 
                    props.recipeData.dietaryRestrictions.map((dietaryRestriction) => {
                    return(
                        <li>
                            { dietaryRestriction }
                        </li>);
                    })
                }
            </ul>
            <p>Ingredients:</p>
            <ul>
                { 
                    props.recipeData.ingredients.map((ingredient) => {
                    return(
                        <li>
                            {ingredient.name}: {ingredient.amount} {ingredient.amountUnit}
                        </li>);
                    })
                }
            </ul>
        </div>
    );
}