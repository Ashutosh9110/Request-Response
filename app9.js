
// const express = require("express")
// const app = express()
// const PORT = 3000
// const cartRouter = require("./routes/cart")


// app.use("/cart", cartRouter)


// app.listen(PORT, () => {
//   console.log(`Server running on PORT ${PORT}`);
// })



const express = require("express")
const app = express()
const PORT = 3000
const userRouter = require("./routes/user")
const cartRouter = require("./routes/cart")
const productRouter = require("./routes/productRoutes")



app.use("/api/users", userRouter)
app.use("/api/products", productRouter)
app.use("/api/cart", cartRouter)



app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
})