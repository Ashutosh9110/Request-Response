const getUserController = (req, res) => {
  res.send("Fetching all users")
}

const postUserController = (req, res) => {
  res.send("Adding a new user")
}

const getUserIdController = (req, res) => {
  const id = req.params.id
  res.send(`Fetching user with ID: ${id}`)
}


module.exports = {
  getUserController,
  postUserController,
  getUserIdController
}