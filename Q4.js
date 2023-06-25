import express from 'express';

const app = express();

app.get('/random', (req, res) => {
    res.json({"random": Math.random() * 100})
})

app.listen(3030, () => {
    console.log("Server is listening to connections at 3030");
})