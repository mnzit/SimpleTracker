var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path')
requestManager = require('./utils/RequestManager');


var authorRouter = require('./routers/authorRouter');

var app = express();

app.set('port', process.env.PORT || 8080);

app.set('view engine', 'ejs');

app.listen(app.get('port'), () => { console.log("Server is running at port: %d", app.get('port')); });


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/static', express.static(path.join(__dirname, "assets")));

app.use('/authors', authorRouter);

let requestMnger = new requestManager();

app.use(function (req, res, next) {
    requestMnger.track(req, res);
    next();
});

app.get("/home", (req, res) => {
    res.send("<h1>HOME</h1>");
})
