const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing");

app.get("/",(req,res)=>{
    res.send("Hi, I am root");
});

app.get("/testListing",async(req,res)=>{
    let listingSchema=new Listing({
        title:"My Home",
        description:"Beautiful place",
        price:1500,
        location:"Kathmandu",
        country:"Nepal"
    });
    await listingSchema.save();
});
main().then(()=>{
    console.log("Successfully connected to the DB");
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
