// Using express object
const express = require('express');
// Express app
const app = express();
//app port:3000 | localhost:3000
const port = 3000;

// Origin Path of localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a LaunchX')
})

app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})