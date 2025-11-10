const express = require('express');
const app = express();
const ExpressError = require("./ExpressError");

const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "Access Denied!");
};

app.get("/api", checkToken, (req,res)=> {
    res.send("data")
})

app.get("/", (req,res) => {
    res.send("Hi im root")
})

app.get("/err", (req,res) => {
    abc=abc
})

// Activity
app.get("/admin",(req,res) => {
    throw new ExpressError(403, "Access to admin is forbidden");
})

app.use((err,req,res,next)=> {
    // console.log(`-------ERROR-------`);
    let {status = 500, message = "some error"} = err;
    //next(err);
    res.status(status).send(message);
})

// app.use((err,req,res,next)=> {
//     console.log(`-------ERROR-2-2-2-2-2-------`);
//     next(err);
// })

//404
// app.use((req,res) => {
//     res.send("Page not found!")
// })

app.listen(8080 , () => {
    console.log(`app listening on port : 8080`);
})