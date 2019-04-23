var express = require("express");
var app = express();
var exphb = require("express-handlebars");
var path = require("path");
var friends = require("./data/friends");

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("/app/public"))

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
