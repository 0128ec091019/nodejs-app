var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello, Welcome to my-app this is version V1" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
