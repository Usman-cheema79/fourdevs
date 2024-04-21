import mongoose from "mongoose";

export const dbconnection =()=>{
    mongoose.connect(process.env.MONGODB_URI,{
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false
        dbName:"fourdivs",
    })
 .then(()=>{
     console.log("Database connected successfully");
 }).catch((err)=>{
     console.error(`Error connecting to database ${err}`);
 });
}