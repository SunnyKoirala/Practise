const express=require("express");
const app=express();
const mongoose=require("mongoose");


app.get("/",(req,res)=>{
    res.send("Hi, I am root");
});

main().then(()=>{
    console.log("Successfully connected to the DB");
}).catch((err)=>{
    console.log(err);
});

async function main()
{
    console.log("Database connection is established");
}
app.listen(8080,()=>{
    console.log("Server is listening to port no 8080");
});
