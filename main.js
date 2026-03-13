import express from "express"
import movieRoutes from "./routes/main.routes.js"
import connectDb from "./lib/db.js"


//connect DB

connectDb()
const app = express()
const PORT = 6969

app.get('/',(req,res) => {
    res.json({msg : "Hello this is vijay!"})

})

//CRUD functionalities of Movies

app.use('/movies' , movieRoutes)

app.listen(PORT, ()=>{
    console.log(`The server is running at http://localhost:${6969}`)
})