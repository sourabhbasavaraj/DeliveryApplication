const express = require("express");
const app = express();
var mysql = require('mysql');

var mysql = require('mysql');

var con = mysql.createConnection({
    "host" : "localhost",
    "user" : "sourabh",
    "password" : "root",
    "database": "deliveryApplication"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});






const mongoose = require ("mongoose");
app.use(express.json());

var cors = require('cors')

app.use(cors())
//Database connection
mongoose.connect("mongodb://127.0.0.1:27017/userReviews",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, (err)=>{
    if(!err){
        console.log("Successfully connected to the database!");
    }
    else{
        console.log(err);
    }
})

//The schema
const schema = {
    id: Number,
    reviewerName: String,
    orderId: Number,
    rating: Number,
    title: String,
    suggestions: String,
    review: String
}

const monModel = mongoose.model("userReviews", schema);

//POST ROUTE
app.post("/post",async(req,res)=>{
    console.log("Inside Post");
    const data = new monModel({
        id: req.body.id ,
        reviewerName:req.body.reviewerName ,
        orderId: req.body.orderId,
        rating: req.body.rating ,
        title: req.body.title ,
        suggestions: req.body.suggestions ,
        review: req.body.review 
    });

    //saving the data in the collection
    const val = await data.save();
    res.json(val); 
})

//Fetching the data from the database
app.get('/fetch',function(req,res){
    // fetchid = req.params.id;
    console.log("Inside the get method");
    monModel.find(({req}),(err,val)=>{
        if(err){
            res.send("Error 404: Not found!")
        }
        else{
            if(val.length==0){
                res.send("Review does not exist!");
            }
            else{
                res.send(val);
            }
        }

    })
})

//MYSQL FETCHING WAREHOUSE 1
app.get('/warehouse1',(req,res)=>{
    // fetchid = req.params.id;
    console.log("Warehouse")

        con.query("SELECT * FROM warehouse1", function (err, result) {
          if (err) 
          {
            throw err;
          }
          else {
            console.log(res);
            res.send(result);
          }
        
        });
})

app.get('/warehouse2',(req,res)=>{
    // fetchid = req.params.id;
    console.log("Warehouse")

        con.query("SELECT * FROM warehouse2", function (err, result) {
          if (err) throw err;
          return(result);
        });
})

app.get('/warehouse3',function(req,res){
    // fetchid = req.params.id;
    console.log("Warehouse")

        con.query("SELECT * FROM warehouse3", function (err, result) {
          if (err) throw err;
          return(result);
        });
})

app.post('/warehouseInfoAddress', function(req,res){
    console.log("Warehouse info address")

    con.query('UPDATE warehousedetails SET wname =?, wAddress =? WHERE w_id = ?', [req.wname, req.wAddress, req.w_id], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
})

//Listening
app.listen(3000, ()=>{
    console.log("On port 300");
})
