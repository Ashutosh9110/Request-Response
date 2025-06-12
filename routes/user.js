const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

router.get("/", userController.getUserController)
router.post("/", userController.postUserController)
router.get("/:id", userController.getUserIdController)



// router.get("/", (req, res) => {
//   res.send("Fetching all users")
// })

// router.post("/", (req, res) => {
//   res.send("Adding a new user")
// })

// router.get("/:id", (req, res) => {

//   console.log(req.params.id);
  
//   res.send(`User ID is ${req.params.id}`);
  
//   });

module.exports = router