
const express = require('express')
const app = express()
const port = 3000

let tasks = [
    {
        id: 1,
        description: "Test",
        storyPoint: 3,
    }
];

app.use(express.json())


app.options('/get', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
})

app.options('/add', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")

    
})

app.get('/get', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(JSON.stringify(tasks))
})


app.post('/add', (req, res) => {

    const task = req.body;

    task['id'] = Math.floor(Math.random() * 100);

    tasks.push(task);

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")

    res.send(JSON.stringify(task))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
