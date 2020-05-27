const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/fruitDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: [true, "Error: no name specified" ]
    },
   
    rating: {
        type: Number,
        min: 1,
        max: 10 
    }, 
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
/*
const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Sweet and crunchy"
});

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 7,
    review: "Tastes good"
});
 
const lime = new Fruit({
    name: "Lime",
    rating: 4,
    review: "Sour"
});

Fruit.insertMany([pineapple, lime], (error)=> {
    if(error){
        console.log(err);
    } else {
        console.log("Fruit successfully added to the fruitDB");
    }
})

fruit.save();

const orange = new Fruit({
    name: "orange",
    rating: 8
});
 
orange.save();

*/

//access the fruits collection
Fruit.find(function(error, fruits) {
    if(error){
        console.log(error);
    } else {
        console.log(fruits);
    }
});

Fruit.find(function(error, fruits) {
    if(error){
        console.log(error);
    } else {
        //console.log(fruits);
        fruits.forEach(fruit => {
            console.log(fruit.name);
        });
 
    }
});

//update a record
Fruit.update({_id: "5e73e31f9fe75b5240186cd2"}, {review: "Juicy fruit"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Record successfully updated.");
    }
});


//delete a record
Fruit.deleteMany({name: "orange"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Item successfully deleted.");
    }
});



app.listen(3000, ()=>{
    console.log("Server is Running on Port 3000");
});