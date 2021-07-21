const express = require("express")
const path = require("path")
const app = express()
const PORT = 3001

app.get("/", (req, res) => {
  res.send("hello world. sad day")
})

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`)
})
