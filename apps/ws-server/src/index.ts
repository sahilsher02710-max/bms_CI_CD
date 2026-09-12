import { WebSocketServer } from "ws";
import {client} from "@repo/db/client"
const server  = new WebSocketServer({
    port : 3001 
});

console.log("WebSocket server is running on port 3001");

server.on("connection",async (socket)=>{
   const user = await client.user.create({
        data:{
            name:Math.random().toString(),
            email:Math.random().toString()
        }
    })

    console.log(user)
    socket.send("hi there you are conencted to the server")
})