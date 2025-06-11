const express = require("express")
const app = express()

const booksRouter = require("./routes/books")
const PORT = 4000


app.use("/books", booksRouter)



app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
})