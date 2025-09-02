const express=require("express");
const app=express();
const mongoose=require("mongoose");

main().then(()=>{
    console.log("Connected succesfully");
}).catch((err)=>{
    console.log(err);
});
async function main()
{
    await mongoose.connect("mongodb://127.0.0.1/practise");
}
app.listen(8080,()=>{
    console.log("Server is listening to port no 8080");
});

