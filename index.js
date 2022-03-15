const express = require('express');
const cors = require('cors')
const routerApi = require('./routes')

const app = express();
const port = 4000;

app.use(express.json())

app.use(cors());

const about = require("./JSON/about.json");
const portafolio = require("./JSON/portafolio.json");

app.get('/', (req, res) => {
    res.send("Amiga, funciona")
});

routerApi(app);

// app.get('/about', (req, res) => {
//     res.json(about)
// });

 app.get('/portafolio', (req, res) => {
     res.json(portafolio)
 });

app.listen(port, () => {
    console.log(`Server on : ${port}`);
})

