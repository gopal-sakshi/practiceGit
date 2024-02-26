const express = require('express');
const app = express();
process.title = "practiceGit23";

app.use(function(req, res, next) {
    const allowedOrigins = ["http://localhost:8902", "http://127.0.0.1:9099"];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    next();
});

app.get('/', (req, res) => {
    res.send({info: "msg23"});
});

app.listen(3067, () => {
    console.log('listening on 3067');
});