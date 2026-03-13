import express from "express"
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from "../controllers/movies.controller.js"


const router = express.Router()

//MVC - Model View Controllers


//crud functionalities of  
//R for reading

//
router.get('/',MovieIndex )

// C - for creating movies
router.post('/', MovieCreate)

//U -Update the movies

router.put('/:id', MovieUpdate)

//D - Delete the movies

router.delete('/:id', MovieDelete )

export default router;