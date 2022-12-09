import { ADD_FAVORITES } from "./types";
import { DELETE_FAVORITES, FILTER, ORDER } from "./types";



export function addFavorites (id) {
    return {
        type: ADD_FAVORITES,
        payload: id
    }
}

export function deleteFavorites (id){
    return {
        type: DELETE_FAVORITES,
        payload: id
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