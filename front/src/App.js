import { useEffect, useState } from 'react';
import { Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/NavBar';
import {Routes} from "react-router-dom";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites  from './components/Favorites/Favorites';

function App () {
  
  const [characters, setCharacters] = useState ([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'liliana.ruiz@yahoo.com';
  const password = 'Gustavoa47p';

  useEffect(() => {
   !access && navigate('/');
 }, [access]);
  
    function onSearch(character) {
      fetch(`https://localhost:3001/rickandmorty/onsearch/${character}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });
   
  };

  const onClose = (character) => {
    setCharacters (characters.filter((char)=> char.character !== character));
  }

  

  function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}

  
  return (  
   <div className="App" style={{padding: '25px' }}>
      {location.pathname !== "/" && <NavBar onSearch = {onSearch}/>}
      
      <Routes>
        <Route path="/" element ={<Form login = {login}/>}/>
        <Route
           path="/home" 
           element ={<Cards characters={characters} onClose={onClose}/> }
        />
        <Route path="/about" element={<About/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
      </Routes>
        
   </div>
  );
}

export default App;
