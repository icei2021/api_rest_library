const express = require("express");

const app = express();

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

app.listen(4000, ()=>{
    console.log("Connecting to the PORT 4000");
});
