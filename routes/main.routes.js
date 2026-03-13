import express from "express"

const router = express.Router()

//crud functionalities of  
//R for reading

///
router.get('/', (req, res) => {
    res.send("Get all movies lists")

})

// C - for creating movies
router.post('/', (req, res) => { 
    res.send("Create a movies lists")
})

//U -Update the movies

router.put('/:id', (req, res) => {
    res.send("Update the movie list ")
})

//D - Delete the movies

router.delete('/:id', (req, res) => {
    res.send("Delete a movie list")

})

export default router;