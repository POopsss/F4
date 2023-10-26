import React from "react";
import { Route, Routes } from "react-router-dom";

import "../styles/styles.css";

import Recipe from "./Recipe";
import Home from "./Home";
import Category from "./Category";
import Swagger from "./Swagger";
import Nav from "./Nav";


export default function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/:category" element={ <Category /> } />
                <Route path="/:category/:id" element={ <Recipe /> } />
                <Route path="/swagger" element={ <Swagger /> } />
            </Routes>
        </>
    )
};