import { ADD_FAVORITES } from "./types";
import { DELETE_FAVORITES, FILTER, ORDER } from "./types";
import axios from "axios";



export function addFavorites (character) {
    //return { type: ADD_FAVORITES, payload: character}
    return async (dispatch) => {
        const response = await axios.post("http://localhost:3001/rickandmorty/fav", character)
        const data = response.data;

        return dispatch({
            type: ADD_FAVORITES,
            payload: data
        })
    }
}

export function deleteFavorites (id){
    //return {type: DELETE_FAVORITES,payload: id}
    return async (dispatch) => {
        const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
        const data = response.data;

        return dispatch({
            type: DELETE_FAVORITES,
            payload: data
        })
    }
}

export function filterCards(status){
    return{
        type: FILTER,
        payload: status
        
    }
}

export function orderCards (id){
    return {
        type: ORDER,
        payload: id
        
    }
}