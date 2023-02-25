import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card"
import { filterCards, orderCards } from "../redux/actions";


export function Favorites({myFavorites}){
    //console.log(myFavorites)
     const dispatch = useDispatch();
     const handleClick = (e) => {
        const { name, value } = e.target
        switch (name){
            case "order":
                return dispatch(orderCards(value))
            case "filter":
                return dispatch(filterCards(value))            
        }
     }
    return(
        <div>
            <div>
                <select name = "order" onClick={handleClick}>
                    <option value = "Ascendente"></option>
                    <option value = "Descendente"></option>
                </select>
                <select name = "filter" onClick={handleClick}>
                    <option value= "Male"></option>
                    <option value= "Female"></option>
                    <option value= "Genderless"></option>
                    <option value= "unknown"></option>
                </select>
            </div>
            {myFavorites?.map((character, index) =>{
             <Card
             key={index}
             detailId={character.detailId}
             name={character.name}
             species={character.species}
             gender={character.gender}
             image={character.image} 
              />
            })}
        </div>
    )
}

export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }

}

export default connect(mapStateToProps, null)(Favorites)