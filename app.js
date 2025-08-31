const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing");
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
main().then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
});
async function main()
{
    mongoose.connect("mongodb://127.0.0.1:27017/practise");
}
app.get("/",(req,res)=>{
    res.send("This is root");
});

app.get("/testListing",async(req,res)=>{
    let newListing=new Listing({
        title:"My home",
        description:"Peaceful Area",
        price:2500,
        location:"Kathmandu",
        country:"Nepal"
    })
    await newListing.save();
    console.log("data has been saved successfully");
    res.send("data has been saved successfully");
});

app.get("/listings",async(req,res)=>{
 const allListing=await Listing.find({});
 res.render("listings/index",{allListing});
});



app.listen(8080,()=>{
    console.log("Server is listeneing to port 8080");
});

