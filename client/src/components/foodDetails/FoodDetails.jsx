/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer } from "react";
import { getOneFoodItemById } from "../../services/foodService";
import { useNavigate, useParams } from "react-router-dom";
import '../../components/foodDetails/foodDetails.module.css';

const initialState = {food: null};
const reducer = (state, action) => {
  switch(action.type){
    case 'FOOD_LOADED':
      return {...state, food: action.payload}
    default:
      return state;
  }
}

export default function FoodItem() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { food } = state;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getOneFoodItemById(id)
        .then((foodItem) => {
          dispatch({ type: "FOOD_LOADED", payload: foodItem });
        })
        .catch((error) => {
          console.error("Error fetching food details:", error);
          
        });
    }
  }, [id]);

  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'fit-content',
    borderRadius: '8px',
    margin: '0 auto',
    padding: '16px',
    justifyContent: 'center',
    border: '1px solid #ccc',
    background: 'linear-gradient(to right, #215f00, #e4e4d9)'
  }}
>
  <img
    src={`/foods/${food.imageUrl}`}
    alt={food.name}
    style={{
      width: '250px',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '8px',
      
    }}
  />
  <div>
    <h3 style={{fontSize: '22px', fontWeight: 'bold', color: 'black'}}>{food.name}</h3>
    <p style={{fontWeight: 'bold'}}>Cook Time: {food.cookTime}</p>
    <p style={{fontWeight: 'bold'}}>Stars: {food.stars}</p>
    <p style={{fontWeight: 'bold'}}>Origins:</p>
    <ul style={{listStyleType: 'circle'}}>
      {food.origins.map((origin, index) => (
        <li key={index}>{origin.toUpperCase()}</li>
      ))}
    </ul>
  </div>
</div>


  );
}
