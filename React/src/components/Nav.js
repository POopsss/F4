import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../styles/nav.css"
import URL from "../config";


export default function Nav() {
    const [categories, setCategories] = React.useState({})

    React.useEffect(() => {
        axios.get(URL+"category/?format=json").then(res => {
            setCategories(res.data)
        });
    }, []);

    return (
        <nav>
            <Link to="/">Главная</Link>
            <div className="dropdown_list">
                <div className="drop">Категории</div>
    
                <div className="dropdown">

                    { Object.entries(categories).length > 0 ? categories.map((category) => 
                    <a href={`/${category.name}`} key={category.id}>{category.nameRU}</a>) 
                    : ""}
                    
                </div>
            </div>
            <Link to="/swagger">Документация API</Link>
        </nav>
    )
}