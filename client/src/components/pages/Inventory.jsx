import React, { useEffect, useReducer } from "react";
import { getAll, search } from "../../services/foodService";
import Thumbnail from "../Thumbnail/Thumbnail";
import { useParams } from "react-router-dom";
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

  useEffect(() => {
    const loadFoods = searchTerm ? search(searchTerm) : getAll();
    // console.log(searchTerm)
    // console.log(loadFoods)
    loadFoods.then(foods => dispatch({type: 'FOODS_LOADED', payload: foods}));
  }, [searchTerm])

  return (
    <>
        <Search/>
        <Thumbnail foods={foods} />
    </>
  );

}
