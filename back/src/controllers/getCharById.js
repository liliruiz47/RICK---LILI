const axios = require("axios");
const getCharById = function (res, id) {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
        const character ={
        id : data.id,
        image : data.image,
        name : data.name,
        gender : data.gender,
        species : data.species
        }
        res.writeHead(200, {"Content-type":"application/json"})
        res.end(JASON.stringify(character))
    })
    .catch((error) =>{
        res.writeHead(500, {"Content type": "text/plain"})
        res.end(error.message);
    })
}

module.exports = {
    getCharById
}