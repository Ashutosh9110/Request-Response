const express = require("express")
const router = express.Router()
const {students} = require("../data")

router.get("/students", (req, res) => {
  const studentList = students.map(x => {
    return `Student's ID: ${x.id}, name: ${x.name}`
  }).join("<br>")
  res.send(studentList)
})

router.get("/students/:id", (req, res) => {
  const studentId = Number(req.params.id)
  const student = students.find(x => x.id === studentId)
  
  if(student){
    res.send(`Student name: ${student.name}, ID: ${student.id}`)
  } else {
    res.send("Student not found")
  }
})


module.exports = router
