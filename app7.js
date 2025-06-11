const express = require("express")
const app = express()
const productRouter = require("./routes/products")
const categoriesRouter = require("./routes/categories")
const PORT = 4000


app.use("/products", productRouter)
app.use("/categories", categoriesRouter)



app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
})