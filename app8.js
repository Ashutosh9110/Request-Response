const express = require("express")
const app = express()
const studentsRouter = require("./routes/students")
const courseRouter = require("./routes/courses")
const PORT = 3000


app.get("/", (req, res) => {
  res.send("Welcome to the Student & Course Portal API!")
})

app.use("/", studentsRouter)
app.use("/", courseRouter)

app.use("/*", (req, res) => {
  res.status(404).send("Page not found")
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})