import React from "react";
import "./Background.css";
import Navbar from "../Navbar";
const Background = () => {
    return <>
        <header>
            <Navbar />
        </header>
        <div class="area" >
            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div >
    </>
};

export default Background;