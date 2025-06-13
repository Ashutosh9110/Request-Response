


const getCartController = (req, res) => {
  const id = req.params.userId
  res.send(`"Fetching cart for user with ID: ${id}`)
}

const postCartController = (req, res) => {
  const id = req.params.userId
  res.send(`Adding product to cart for user with ID: ${id}`)
}

module.exports = {
  getCartController,
  postCartController
}



























// const getCartController = (req, res) => {
//   const id = req.params.userId
//   res.send(`Fetching cart for user with ID:${id}`)
// }

// const postCartController = (req, res) => {
//   const id = req.params.userId
//   res.send(`Adding product to cart for user with ID: ${id}`)
// }


// module.exports = {
//   getCartController,
//   postCartController
// }