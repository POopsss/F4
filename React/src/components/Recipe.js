import React from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

import "../styles/recipe.css";
import URL from "../config";


export default function Recipe() {
    const id = useParams().id;
    const [recipe, setRecipe] = React.useState({})

    React.useEffect(() => {
        axios.get(URL+`recipe/?id=${id}&format=json`).then(res => {
            setRecipe(res.data[0])
        });
    }, []);

    return(
        <>
        <h1>{recipe.name}</h1>
        <div className="content"><p>{recipe.content}</p></div>
        </>
    )
}
