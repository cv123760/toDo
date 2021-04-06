const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname+"/date.js")
const mongoose = require("mongoose")


const app = express()

// create a database
mongoose.connect('mongodb://localhost:27017/todolistDB', {useNewUrlParser: true})
const ItemsSchema = Item {
    name: String
}

const Item = mongoose.model("item", ItemsSchema)

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app. get ('/', function(req, res){
    let day = date.getDate()
    res.render("list", {ListTitle: day, newListItems: items});
});

app.get ("/work", function(req, res){
    res.render("list.ejs", {ListTitle: "Work List", newListItems: workItems})
});

app.get ("/about", function(req, res){
    res.render("about")
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    
    items.push(item);

    res.redirect("/")
});


app.get("/", function(req, res){

    
    res.render('list',{kindOfDay:day} ); //will look for list.ejs inside the views folder  

    
});




app.listen(process.env.PORT||'3000', function(){
    console.log("serveris running on port 3000")
});