const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const Listing=require("./models/listing");
const methodOverride=require("method-override");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
main().then(()=>{
    console.log("Connected succesfully");
}).catch((err)=>{
    console.log(err);
});
async function main()
{
    await mongoose.connect("mongodb://127.0.0.1/practise");
}

//Insert Route
app.get("/listings",async(req,res)=>{
    const allListing=await Listing.find({});
    res.render("listings/index",{allListing});
});

//New Route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new");
});
//Show Route
app.get("/listings/:id",async(req,res)=>{
    let{id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/show",{listing});
});
//Create Route
app.post("/listings",async(req,res)=>{
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});

//Edit Route
app.get("/listings/:id/edit",async(req,res)=>{
    let{id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit",{listing});
});

//Update Route
app.put("/listings/:id",async(req,res)=>{
    let{id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
});

//Delete Route

app.listen(8080,()=>{
    console.log("Server is listening to port no 8080");
});

