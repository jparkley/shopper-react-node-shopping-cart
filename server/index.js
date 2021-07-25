const express = require("express")
const path = require("path")
const getRoutes = require("./routes")
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())

app.use("/api", getRoutes())
// app.get("*", function (req, res) {
//   console.log("at root")
// })

app.get("/test", function (req, res) {
  console.log("test")
  return res.send("hello")
})
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`)
})

// const getRoutes = require("./routes")
// const PORT = process.env.PORT || 3001

// const app = express()
// app.use(express.json()) //middleware (lesson 18, 1:30)

// // Serve the built version of our React app
// app.use(express.static(path.resolve(__dirname, "../client/build")))

// app.use("/api", getRoutes())

// // All routes that don't match api will be caught by this route (routed through our React app)
// app.get("*", function (req, res) {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
// })

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`)
// })
