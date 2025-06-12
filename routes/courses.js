const express = require("express")
const router = express.Router()
const { courses } = require("../data")

router.get("/courses", (req, res) => {
  const courseList = courses.map(x => {
    return `Course name: ${x.name}, Description: ${x.description}`
  }).join("<br>")
  res.send(courseList)
})

router.get("/courses/:id", (req, res) => {
  const courseId = Number(req.params.id)
  const course = courses.find(x => x.id === courseId)
  if(course){
    res.send(`Course ID: ${course.id} and Course: ${course.name} :- Description: ${course.description}`)
  } else {
    res.send("Course not found  ")
  }
})


module.exports = router