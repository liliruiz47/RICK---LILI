const server = require ("../routes/server");
const session = require ("supertest");
const agent = session (server);

describe ("Test de RUTAS", () => {
    describe("GET rickandmorty/{id}", () =>{
        it ("Responde con status 200", () => {
            agent.get("/rickandmorty/character/1").expect(200)
        })
        it("Responde un objeto con las propiedades: id, name, species,gender, image",
         () => {
            agent.get("/rickandmorty/character/1").then
            ((res) => {
                expect(res.body).toEqual({
                    "id":1,
                    "name":"Morty Smith",
                    "species":"Human",
                    "gender":"Male",
                    "status":"Alive",
                    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                })
            })
         })
         it ("Si hay un error responde con status: 500", () => {
            agent.get("/rickandmorty/character/IDqueNoExiste").expect(500)
         })
    })
})