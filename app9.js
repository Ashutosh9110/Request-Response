const express = require("express")
const app = express()
const userRouter = require("./routes/user")
const cartRouter = require("./routes/cart")
const productRouter = require("./routes/product")

const PORT = 3000


app.use("/", userRouter)
app.use("/", productRouter)
app.use("/", cartRouter)



app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
})