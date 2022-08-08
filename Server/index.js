const port=8000;
const express=require("express");
const app=express();
const { MongoClient }=require("mongodb");
const uri="mongodb+srv://abhishek:@cluster0.lekcj.mongodb.net/?retryWrites=true&w=majority";


app.get("/us",async (req,res)=>{
  const client=new MongoClient(uri,(err,db)=>{
      console.log("connection made");
  });
  try {
      await client.connect();
      const database=client.db("app-data");
      const users=database.collection("users");
      const returnedUsers= await users.find().toArray();
      res.json(returnedUsers);
  }finally {
      await client.close();
  }
});


app.listen(port,()=>{console.log("server running on : " + port)});


