const express = require("express");

const app = express();

//REST APIs => Representational State Transfer

/*
get => getting data from server
post => add some data to server
put/patch =? update some data on the server
delete => remove some data from server

*/

app.get("/user", function(req, res){    // this app.get will take two arguments --> 1. route  , 2. callback function

    console.log("Hello bro");    
    
   res.send("Hello") ;                            // localhost:9555/users  ( do it in browser) // npm install -g nodemon 
                                            // to see the response on the browser we net to return something from here ;

});              // to return or send something we do  { res.send("hello users i am ketan")} 



app.get("/books", function(req,res){
    console.log("Hello");

    res.send({
        book1 : "Shamchi Aai",
        book2 : "Agnipankh",
        book3 : "Rich Dad Poor Dad",
        book4 : "The Intelligent Investor",
    })
});

app.listen(9555, ()=>{
    console.log("Hello there, I am Ketan Mangidkar");
});