const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }))

const siteMap = {
    "/:city/pharmacies": "returns pharmacies list for /:city",
    "/:city/colleges": "returns colleges list for /:city",
    "/:city/doctors": "returns doctors list for /:city",
    "/:city/hospitals": "returns hospitals list for /:city"
}
const harrow = require("./data/Harrow.json")
const stratford = require("./data/Stratford.json")
const heathrow = require("./data/Heathrow.json")

app.get("/", function (request, response) {
    response.json(siteMap);
});
app.get("/:city/pharmacies", function (request, response) {
    if (request.params.city.toLowerCase() === "stratford") {
        response.json(stratford.pharmacies);
    } else if (request.params.city.toLowerCase() === "harrow") {
        response.json(harrow.pharmacies);
    } else {
        response.json(heathrow.pharmacies);
    }
});
app.get("/:city/colleges", function (request, response) {
    if (request.params.city.toLowerCase() === "stratford") {
        response.json(stratford.colleges);
    } else if (request.params.city.toLowerCase() === "harrow") {
        response.json(harrow.colleges);
    } else {
        response.json(heathrow.colleges);
    }
});
app.get("/:city/doctors", function (request, response) {
    if (request.params.city.toLowerCase() === "stratford") {
        response.json(stratford.doctors);
    } else if (request.params.city.toLowerCase() === "harrow") {
        response.json(harrow.doctors);
    } else {
        response.json(heathrow.doctors);
    }
});
app.get("/:city/hospitals", function (request, response) {
    if (request.params.city.toLowerCase() === "stratford") {
        response.json(stratford.hospitals);
    } else if (request.params.city.toLowerCase() === "harrow") {
        response.json(harrow.hospitals);
    } else {
        response.json(heathrow.hospitals);
    }
});

app.listen(port);