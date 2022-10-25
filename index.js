const express = require('express')
const app = express()
const port = 5000

const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(course => course.id === id)
    res.send(selectedCourses)
})

app.listen(port, ()=> {
    console.log('port num:', {port})
})