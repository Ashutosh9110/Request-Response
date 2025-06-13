

const path = require("path")


const getProducts = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "product.html"))
}


const getProductsById = (req, res) => {
  const {id} = req.params
  res.send(`Fetching products with ID: ${id}`)
}

// const postProducts = (req, res) => {
//   res.send("New products added")
// }

module.exports = {
  getProducts,
  getProductsById,
  // postProducts
}