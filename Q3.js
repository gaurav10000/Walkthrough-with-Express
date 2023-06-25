import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({"msg": "I am homepage"})
})

app.get('/about', (req, res) => {
    res.json({"msg": "I am about page"})
})

app.get('/contact', (req, res) => {
    res.json({"email": "support@pwskills"})
})

app.listen(3030, () => {
    console.log("Server is listening to connections at 3030");
})