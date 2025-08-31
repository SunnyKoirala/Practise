const mongoose=require("mongoose");
const Listing=require("../models/listing");
const allData=require("./data");

main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
});
async function main()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/practise");
}

const initData=async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(allData.data);
    console.log("data inserted successfully");
}

initData();
