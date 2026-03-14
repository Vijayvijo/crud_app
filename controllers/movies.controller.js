export  const MovieIndex = (req, res) => {
    res.send("Get all movies lists")

}

export const MovieCreate = (req, res) => { 
    // id title desc
    console.log(req.body)
    return res.json(req.body)
}

export const MovieUpdate =  (req, res) => {
    res.send("Update the movie list ")
}

export const MovieDelete = (req, res) => {
    res.send("Delete a movie list")

}