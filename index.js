var express = require("express");
const bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(4000, () => {
    console.log("Server running on port 4000");
});
let fishermens = [
    { "id": "1", "name": "Rajitha Fernando", "email": "sample@email.com" },
    { "id": "2", "name": "Venura Dananjaya", "email": "sample@email.com" },
    { "id": "3", "name": "Nimal Fernando", "email": "sample@email.com" },
    { "id": "4", "name": "Kamal Perera", "email": "sample@email.com" },
    { "id": "5", "name": "Sunil De Silva", "email": "sample@email.com" }
]


app.get("/getusers", (req, res, next) => {
    res.json(
        { fishermens }

    );
});


app.post("/adddata", (req, res, next) => {

    fishermens.push(
        {"id": "6", "name": req.body.Fname + ' ' + req.body.Lname, "email": "sample@email.com"}
    )
    console.log( fishermens)
});