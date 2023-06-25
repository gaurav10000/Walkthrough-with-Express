import express from 'express';

const app = express();
let count = 0;

app.get('/', (req, res) => {
    res.json({"counter": count})
})

app.get('/increment', (req, res) => {
    res.json({"counter": ++count})
})

app.get('/decrement', (req, res) => {
    res.json({"counter": --count})
})

app.listen(3030, () => {
    console.log("Server is listening to connections at 3030");
})