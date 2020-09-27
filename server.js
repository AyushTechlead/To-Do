const express = require("express");
const bodyParser = require("body-parser");

const Logic = require(__dirname + "/logic.js");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", 'ejs');

var items = [];

var itemOnWork = [];
app.get("/",function(req,res){
  var day = Logic.getDate;
  css = "main.css";
  res.render("list",{pageTitle: day, newItem: items,cssValue: css});
});


app.get("/work",function(req, res){
  day = "Working List";
  var day = Logic.getDate + ",Working List";   //getDate is a anonymous function.
  css = "main1.css";
  res.render("list",{ pageTitle: day, newItem: itemOnWork,cssValue: css});
});
app.post("/",function(req, res){
  var item = req.body.nextItem;
  console.log(req.body.button);
  if(req.body.button === "Working"){
    itemOnWork.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(3000, function(req, res){
  console.log("Server is running on port 3000");
});
