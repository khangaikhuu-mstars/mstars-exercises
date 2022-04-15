import React from "react";
import "../css/index.css";
export const Search = props =>(
    <input 
    className="search-box"
    type="search"
    placeholder="Robot search"
    onChange={props.onSearch}/>
)