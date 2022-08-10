const port=8000;
const express=require("express");
const {MongoClient} = require("mongodb");
const app=express();
const mongoClient=require("mongodb").MongoClient;
const bcrypt =require("bcrypt");
const cors =require("cors");
const jwt=require("jsonwebtoken");
const {v4} = require("uuid");
const uri="mongodb+srv://abhishek:@cluster0.lekcj.mongodb.net/?retryWrites=true&w=majority";
app.use(cors());
app.use(express.json());
app.get("/us",async (req,res)=>{
 await mongoClient.connect(uri,async (err,client)=>{
     try {
         const database = client.db("app-data");
         const returnedUsers = await database.collection("users").find().toArray();
         res.send(returnedUsers);
     }finally {
         await client.close();
     }
})
});
app.post("/signup" , async (req,res)=>{
    const client=new MongoClient(uri);
    console.log("sign up request");
    const{ email , password }=req.body;

    const generatedUserId=v4();
    const hashedPassword=await bcrypt.hash(password,10);
    try{
        await client.connect();
        const database=client.db("app-data");
        const users=database.collection("users");
        const existingUser=await users.findOne({"email":email});
        if(existingUser)
        {
            console.log("i m here");
           return  res.status(206).send("user already exists kindly try to login");
        }
        const sanitizedEmail =email.toLowerCase();
        const data={
            user_id:generatedUserId,
            email:sanitizedEmail,
            hashed_password:hashedPassword
        };
         const insertedUser=await  users.insertOne(data);
         const token=jwt.sign(insertedUser,sanitizedEmail,{
             expiresIn:60 * 24,
         });
        res.status(201).json({token,user_id:generatedUserId});
    }catch (err)
    {
        console.log(err);
    }
    finally{
        await client.close();
    }

});
app.post("/login",async (req,res)=>{
    console.log("login request");
    const {email , password}=req.body;
    const client=new mongoClient(uri);
    try{
        await client.connect();
        const database=client.db("app-data");
        const users=database.collection("users");
        const user=await users.findOne({"email":email});
        if(user)
        {
            const correctPassword=await bcrypt.compare(password,user.hashed_password);
            if(correctPassword) {
                const token = jwt.sign(user, email, {
                    expiresIn: 60 * 24,
                });
                return res.status(201).json({token, "user_id": user.user_id});
            }
        }
        res.status(206).send("passwords dont match");

    }
    catch(err)
    {
        console.log(err);
    }

});
app.put("/user",async  (req,res)=>{
    console.log("i m in onboard update");
    const client=new mongoClient(uri);
    const {formInfo} =req.body;
    try{
        await client.connect();
        const database=await client.db("app-data");
        const users= await database.collection("users");
        const query={"user_id":formInfo.user_id};
        const setQuery={$set: {
        "first_name":formInfo.first_name,
        "dob_day":formInfo.dob_day,
        "dob_month":formInfo.dob_month,
        "dob_year":formInfo.dob_year,
        "show_gender":formInfo.show_gender,
        "gender_identity":formInfo.gender_identity,
        "gender_interest":formInfo.gender_interest,
        "url":formInfo.url,
        "about":formInfo.about,
        "matches":formInfo.matches
            }};
        const updateUser=await users.updateOne(query,setQuery);
        console.log(updateUser);
        res.status(201).send(updateUser);
    }catch(err)
    {
        console.log(err);
    }
    finally
    {
       await  client.close();
    }
});
/*
app.post("/login", async (req,res)=>{
    console.log("in login");
  const {email , password}=req.body;
  const hashedPassword=await bcrypt.hash(password,10);
  const client= new mongoClient(uri);
  try{
      const database=await client.db("app-data");
      const users=await database.collection("users");
      const userFound=await users.findOne( {"email":email});
      console.log(userFound);
      if(!userFound)
      { console.log("no user founf")
          return res.status(210).send();
      }
      res.status(201).send();
  }
  catch(err)
  {
      throw err;
  }
})
*/



app.listen(port,()=>{console.log("server running on : " + port)});


