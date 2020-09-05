const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }))

const siteMap = {
    "/pharmacies": "returns pharmacies list for stratford",
    "/colleges": "returns colleges list for stratford",
    "/doctors": "returns doctors list for stratford",
    "/hospitals": "returns hospitals list for stratford"
}

app.get("/", function (request, response) {
    response.json(siteMap);
});
app.get("/pharmacies", function (request, response) {
    response.json(siteMap);
});
app.get("/colleges", function (request, response) {
    response.json(siteMap);
});
app.get("/doctors", function (request, response) {
    response.json(siteMap);
});
app.get("/hospitals", function (request, response) {
    response.json(siteMap);
});

app.listen(port);