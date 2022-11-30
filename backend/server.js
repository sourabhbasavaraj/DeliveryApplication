const express = require("express");
const app = express();

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



//Listening
app.listen(3000, ()=>{
    console.log("On port 300");
})
