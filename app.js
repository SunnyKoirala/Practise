const express=require("express");
const app=express();
const mongoose=require("mongoose");


app.get("/",(req,res)=>{
    res.send("Hi i am root");
});

main().then(()=>{
    console.log("successfully connected to database");
}).catch((err)=>{
    console.log(err);
});

async function main()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/practise");
}
app.listen(8080,()=>{
    console.log("Server is listening to port no 8080");
});

