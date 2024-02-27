const express = require("express");
const cors = require("cors");

const routes = require('./routes/router');

const app = express();

app.use(express.json());
app.use(cors({origin: "*"}));

routes.map(route => {
    app.use(route.path, route.router);
});

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});