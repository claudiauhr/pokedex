
const express = require("express")
const app = express()
const methodOverride = require("method-override")
const pokemon = require("./models/pokemon.js")
const PORT = 3001;

// Mount middleware
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride("_method"))

app.use((req, res, next) => {
    console.log(" I run for all routes");
    console.log(req.body)
    next()
})
app.use(express.static('public'))

// Index
app.get("/pokemon", (req, res) => {
  res.render("index.ejs", {
    data: pokemon,
  })
})

// New 
app.get("/pokemon/new", (req, res) => {
  res.render("new.ejs")
  
})

// Delete

app.delete('/pokemon/:id', (req, res) => {
  pokemon.splice(req.params.id, 1) 
  //remove the item from the array
  res.redirect("/pokemon") 
  //redirect back to index route
})
// Update
app.put("/pokemon/:id", (req, res) => {
  console.log(req.body)
  pokemon[req.params.id].name = req.body.name
  pokemon[req.params.id].type = req.body.type
  res.redirect("/pokemon")
})

// Create/Post
app.post("/pokemon", (req, res) => {
  pokemon.push(req.body)
  res.redirect("/pokemon") 
})

// Edit
app.get('/pokemon/:id/edit', (req, res) => {
  res.render(
    "edit.ejs", {
      data: pokemon[req.params.id],
      index: req.params.id,

    }
  )
})

// Show
app.get('/pokemon/:id', (req, res) => {
  console.log(pokemon[req.params.id])
  res.render('show.ejs', { 
    data: pokemon[req.params.id] });
  });


app.listen(PORT, () => {
  console.log("listening ${PORT}")
})