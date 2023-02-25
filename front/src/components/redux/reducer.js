import {ADD_FAVORITES, DELETE_FAVORITES, FILTER} from "./types"

const initialState = {
    myFavorites: [],
    allCharacters:[]
} 

export default function rootReducer(state = initialState, {type, payLoad}) {
    switch (type) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payLoad],
                allCharacters: [...state.myFavorites, payLoad]
            }
        
        case DELETE_FAVORITES:
            const filtered = state.myFavorites.filter(
                fav => fav.id !== payLoad
            )
            return {
                ...state,
                myFavorites: filtered
            }

        case FILTER:
            const filterCopy = [...state.allCharacters]
            const filter = filterCopy.filter(ch => ch.gender === payLoad)
            return {
                ...state,
                myFavorites: filter
            }
        //case ORDER:
        //   const orderCopy = [...state.allCharacters]
        //  const order = orderCopy.sort((a,b) => {
         //       if(a.id < b.id){
           //         payLoad === "Ascendente" ? 1 : -1
             //   }
               // if(a.id < b.id) {
                 //   payLoad === "Descendiente" ? -1 : 1
                //}
                //else return 0 
           // })
            //return {
              //  ...state,
                //myFavorites: order
            //}
    
        default:
            return state;
    }
}