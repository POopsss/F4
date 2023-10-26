import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";

import "../styles/category.css"
import URL from "../config"


export default function Category() {
  const category = useParams().category;
  const [recipes, setRecipes] = React.useState({})
  const [title, setTitle] = React.useState()

  React.useEffect(() => {
    axios.get(URL+`recipe/?category=${category}&format=json`).then(res => {
      setRecipes(res.data)
    });
    axios.get(URL+`category/?name=${category}&format=json`).then(res => {
      setTitle(res.data[0].nameRU)
    });
}, []);

  return(
    <>
    <h1>{title}</h1>
    { Object.entries(recipes).length > 0 ? recipes.map((recipe) => <div className="recipe" key={recipe.id}><Link to={`${recipe.id}`}><h2>{recipe.name}</h2></Link></div>) : ""}
    </>
  )
} 
