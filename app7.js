const express = require("express")
const app = express()
const PORT = 3000

app.get("/welcome/:name", (req, res) => {
  const name = req.params.name
  const role = req.query.role

  res.send(`Welcome ${name}, you role is ${role}`)

})




app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
})


