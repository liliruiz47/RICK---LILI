import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"
import Styles from "./NavBar.module.css"

export default function NavBar(props) {
    return (
        <div className= {Styles.container}>
        <Link to="/home">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
            <SearchBar onSearch={props.onSearch} />
        </div>
    );
}
