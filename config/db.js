const mongoose = require("mongoose");

const connectDatabase = async()=>{
    const connection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("MongoDB connected successfully")
}

module.exports = connectDatabase;