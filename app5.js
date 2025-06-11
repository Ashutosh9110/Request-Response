const express = require("express")
const app = express()

const PORT = 3000

app.use((req, res, next) => {
  console.log("Enter Library 1");
  next()
})


app.get("/library1", (req, res) => {
  res.send("<h1>Welcome to Library1</h1>")
})

function addUser (req, res, next) {
  req.user = "Guest"
  next()
}

app.get("/welcome", addUser, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
})

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
})