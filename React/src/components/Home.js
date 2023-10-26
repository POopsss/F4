import React from "react";

import axios from "axios";
import { Link } from "react-router-dom";

import "../styles/home.css"
import URL from "../config";


export default function Home() {
    const [categories, setCategories] = React.useState({})

    React.useEffect(() => {
        axios.get(URL+"category/?format=json").then(res => {
            setCategories(res.data)
        });
    }, []);


    return(
        <>
            <h1>Главная</h1>
            <div className="category">
                <h2>Категории</h2>
                { Object.entries(categories).length > 0 ? categories.map((category) => 
                <Link to={`/${category.name}`} key={category.id}><p>{category.nameRU}</p></Link>
                ) : ""}
            </div>
        </>
    )
}
