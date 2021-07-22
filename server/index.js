const express = require("express")
const path = require("path")

const PORT = 3001
const getRoutes = require("./routes")

const app = express()

app.use(express.json())
app.use("/api", getRoutes())

app.listen(PORT, () => {
  //console.log(`Server started at ${PORT}`)
})
