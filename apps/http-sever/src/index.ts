import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello from http")
})

app.post("/signup",async (req, res) => {

    const  {name,email} = req.body;
    
    const user = await client.user.create({
        data:{
            name : name ,
            email : email
        }
    })
    res.json({
        message : "Signup successful",
        id :user.id
    })

})

app.listen(3002, () => {
    console.log(`server is running on port 3002 `)
})