const mongoose=require("mongoose");
const Listing=require("../models/listing");
const allData=require("./data");

main().then(()=>{
    console.log("successfully connected to DB");
}).catch((err)=>{
    console.log(err);
});
async function main()
{
    await mongoose.connect("mongodb://127.0.0.1/practise");
}
const initData=async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(allData.data);
}

initData();