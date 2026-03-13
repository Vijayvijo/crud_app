import express from "express"

const app = express()
const PORT = 6969

app.get('/',(req,res) => {
    res.json({msg : "Hello this is vijay!"})

})

//crud functionalities of movies 
//R for reading
app.get('/movies', () =>{

})

// C - for creating movies
app.post('/movies', () =>{

})

//U -Update the movies

app.put('/movies/:id', () =>{

})

//D - Delete the movies

app.delete('/movies/:id', ()=> {


})
app.listen(PORT, ()=>{
    console.log(`The server is running at http://localhost:${6969}`)
})