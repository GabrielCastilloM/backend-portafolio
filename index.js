const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

const port = process.env.PORT || 8080;

const about = require("./JSON/about.json");
const portafolio = require("./JSON/portafolio.json");

app.get('/', (req, res) => {
    res.send("Amiga, funciona")
});

app.get('/about', (req, res) => {
    res.json(about)
});

app.get('/portafolio', (req, res) => {
    res.json(portafolio)
});

app.listen(port, () => {
    console.log(`Server on : ${port}`);
})

