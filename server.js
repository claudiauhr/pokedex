
const express = require("express")
const app = express()
const methodOverride = require("method-override")
const pokemon = require("./models/pokemon.js")

// Mount middleware
app.use(methodOverride("_method"))


// Index
app.get("/pokemon", (req, res) => {
  res.render("index.ejs", {
    data: pokemon,
  })
})

// New 

// Delete

app.delete('/pokemon/:id', (req, res) => {
  pokemon.splice(req.params.id, 1) 
  //remove the item from the array
  res.redirect("/pokemon") 
  //redirect back to index route
})
// Update

// Create/Post

// Edit

// Show
app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', { 
    data: pokemon[req.params.id] });
  });


app.listen(3000, () => {
  console.log("listening")
})