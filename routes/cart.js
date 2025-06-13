const express = require("express")
const router = express.Router()
const cartController = require("../controllers/cartController")


router.get("/:userId", cartController.getCartController)
router.post("/:userId", cartController.postCartController)


module.exports = router


























// const express = require("express")
// const router = express.Router()
// const cartController = require("../controllers/cartController")


// router.get("/:userId", cartController.getCartController)
// router.post("/:userId", cartController.postCartController)


// // router.get("/:userId", (req, res) => {
// //   const id = req.params.userId
// //   res.send(`Fetching cart for user with ID: ${id}`)
// // })


// // router.post("/:userId", (req, res) => {
// //   const id = req.params.userId
// //   res.send(`Adding product to cart for user with ID: ${id}`)
// // })


// module.exports = router