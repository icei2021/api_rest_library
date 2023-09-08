const express = require("express");

const app = express();
const connectDatabase = require("./config/db");
const dotenv = require("dotenv");
const booksRoutes = require("./routes/Book.route");
const cors = require("cors");

dotenv.config({path:"./config/config.env"})
//Llamando a nuestra conexión
connectDatabase();
app.use(express.json());
app.use("/api/book", booksRoutes)
app.use(cors());
const server = app.listen(process.env.PORT, ()=>{
    console.log("Connecting to the PORT "+ process.env.PORT);
});

process.on("unhandledRejection",(err, promise)=>{
    console.log("Errors: ", err.message)
    server.close(()=>process.exit(1))
})
//localhost:5000/api/book/book
//localhost:5000/api/editorial
//localhost:5000/api/author