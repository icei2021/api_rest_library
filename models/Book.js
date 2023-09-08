const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Enter a book title'],
        maxlength:[500, 'Max length 500 characters']
    },
    description:String,
    price:Number,
    author:String
},
{
    versionKey:false
}
);

module.exports = mongoose.model("Book", BookSchema)