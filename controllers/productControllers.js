const getProducts = (req, res) => {
  res.send("Fetching all products")
}

const getProductsById = (req, res) => {
  const id = req.params.id
  res.send(`Fetching product with ID: ${id}`)
}

const addNewProduct = (req, res) => {
  res.send("Adding a new product")
}

const editProduct = (req, res) => {
  const id = req.params.id
  res.send("Editing the products")
}

const deleteProduct = (req, res) => {
  const id = req.params.id
  res.send("Deleting the product")
}


module.exports = { getProducts, getProductsById, addNewProduct, editProduct, deleteProduct }