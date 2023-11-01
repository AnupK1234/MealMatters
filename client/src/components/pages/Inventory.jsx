import React, { useEffect, useReducer } from "react";
import { getAll, search } from "../../services/foodService";
import Thumbnail from "../Thumbnail/Thumbnail";
import { useNavigate, useParams } from "react-router-dom";
import Search from "../Search/Search";

const initialState = { foods: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "FOODS_LOADED":
      return { ...state, foods: action.payload };
    default:
      return state;
  }
};

export default function Inventory() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods } = state;
  const { searchTerm } = useParams("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadFoods = searchTerm ? search(searchTerm) : getAll();
    // console.log(searchTerm)
    // console.log(loadFoods)
    loadFoods.then(foods => dispatch({type: 'FOODS_LOADED', payload: foods}));
  }, [searchTerm])

  function moveBack() {
    navigate('/')
  }
  return (
    <>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={moveBack}>Navigate Back</button>
        <Search/>
        <Thumbnail foods={foods} />
    </>
  );

}
