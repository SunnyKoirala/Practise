const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing");

app.get("/",(req,res)=>{
    res.send("Hi, I am root");
});

main().then(()=>{
    console.log("Database connection is successfully made");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/practise");
}

app.get("/testListing",async(req,res)=>{
    let listing=new Listing({
        title:"My Home",
        description:"Beautiful and Peaceful Place",
        price:1500,
        location:"Kathmandu",
        country:"Nepal"
    });
    await listing.save();
    console.log("Data saved into DB");
    res.send("Data saved successfully");
})
app.listen(8080,()=>{
    console.log("Server is Listening to port no 8080");
});


