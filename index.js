const express = require("express");

const app = express();
const connectDatabase = require("./config/db");
const dotenv = require("dotenv");
const PORT = process.env.PORT;

dotenv.config({path:"./config/config.env"})
//Llamando a nuestra conexión
connectDatabase();
const users = [
    {
        name:"José",
        email:"jose@example.com"
    },
    {
        name:"Luisa",
        email:"luisa@example.com"
    },
    {
        name:"Raúl",
        email:"raul@example.com"
    }
]

app.get("/test", (request, response)=>{
    response.status(200).json({
        ok:true,
        data: users
    })
})

app.post("/test", (req, res)=>{
    res.send("Creando objeto")
})
app.put("/test", (req, res)=>{
    res.send("Actualizando objeto")
})
app.delete("/test", (req, res)=>{
    res.send("Eliminando objeto")
})

const server = app.listen(process.env.PORT, ()=>{
    console.log("Connecting to the PORT "+ process.env.PORT);
});

process.on("unhandledRejection",(err, promise)=>{
    console.log("Errors: ", err.message)
    server.close(()=>process.exit(1))
})