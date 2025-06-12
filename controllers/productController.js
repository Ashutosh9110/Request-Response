
const productServices = require("../services/productService")


const getProducts = (req, res) => {
  const message = productServices.getProducts()
  res.send(message)
}

const addNewProduct = (req, res) => {
  const message = productServices.addNewProduct()
  res.send(message)
}

const getProductsById = (req, res) => {
  const id = req.params.id
  const message =  productServices.getProductsById(id)
  res.send(message)
}





module.exports = {
  getProducts,
  addNewProduct,
  getProductsById
}
