import React from "react";
import styles from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
   const [character, setCharacter] = useState ("");
   const handleChange = (e) => {
      const {value} = e.target;
      setCharacter(value)
   }
   return (
      <div className={styles.container}>
          <input type='search' name = "search" id ="" onChange={handleChange} />
      <button onClick={()=>props.onSearch(character)}>Buscar</button> 
      </div>
   );
}
