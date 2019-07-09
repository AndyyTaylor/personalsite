
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const next = require('./next');
const path = require('path');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public')));


const start = async (port) => {
    await next(app);

    app.get('/main', (req, res) => req.app.render(req, res, '/', {
        routeParam: req.params.routeParam
    }));

    app.listen(port);
};

start(9001);
