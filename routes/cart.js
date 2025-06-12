const express = require("express")
const router = express.Router()



router.get("/cart/:userId", (req, res) => {
  const id = req.params.userId
  res.send(`Fetching cart for user with ID: ${id}`)
})


router.post("/cart/:userId", (req, res) => {
  const id = req.params.userId
  res.send(`Adding product to cart for user with ID: ${id}`)
})


module.exports = router