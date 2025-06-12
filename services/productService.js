


const getProducts = () => {
  return "Fetching all products"
}

const getProductsById = (id) => {
  // const id = req.params.id
  return `Fetching product with ID: ${id}`
}

const addNewProduct = () => {
  return "Adding a new product"
}

module.exports = { getProducts, getProductsById, addNewProduct }