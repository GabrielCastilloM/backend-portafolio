const express = require('express');
const cors = require('cors')
const routerApi = require('./routes')

const {logErrors, errorHandler, boomErrorHandler} = require('./middleware/error.handler')

const app = express();
const port = 4000;

app.use(express.json())

app.use(cors());

// const about = require("./JSON/about.json");
// const portafolio = require("./JSON/portafolio.json");

app.get('/', (req, res) => {
    res.send("Amiga, funciona")
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server on : ${port}`);
})

