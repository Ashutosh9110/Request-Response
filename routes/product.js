const express = require("express")
const router = express.Router()
const productController = require("../controllers/productControllers")

// router.get("/", (req, res) => {
//   res.send("Fetching all products")
// })

router.get("/", productController.getProducts)
router.get("/:id", productController.getProductsById)
router.post("/", productController.addNewProduct)
router.put("/:id", productController.editProduct)
router.delete("/:id", productController.deleteProduct)

router.post("/", (req, res) => {
  res.send("Adding a new product")
})

// router.get("/:id", (req, res) => {
//   const id = req.params.id
//   res.send(`Fetching product with ID: ${id}`)
// })

module.exports = router