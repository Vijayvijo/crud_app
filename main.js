import express, { urlencoded } from "express"
import movieRoutes from "./routes/main.routes.js"
import connectDb from "./lib/db.js"




const app = express()
const PORT = 6969

//connect DB

connectDb()

// data understanding middlewares
app.use(express.json())
//url encoded
app.use(express.urlencoded({extended : true}));

app.get('/',(req,res) => {
    res.json({msg : "Hello this is vijay!"})

})

//CRUD functionalities of Movies

app.use('/movies' , movieRoutes)

app.listen(PORT, ()=>{
    console.log(`The server is running at http://localhost:${6969}`)
})