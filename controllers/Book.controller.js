const Book = require("../models/Book");

exports.getBooks = async (req,res)=>{
    try {
        const booksData = await Book.find()
        res.status(200).json({
            ok:true,
            status:200,
            data:booksData
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            status:400,
            error: error
        })
    }
}

exports.getBookByID = async (req,res)=>{
    try {
        const id = req.params.id
        const bookData = await Book.findById(id)
        if(!bookData){
            res.status(404).json({
                ok:false,
                status:404,
                mesg:"Book not found"
            })    
        }
        res.status(200).json({
            ok:true,
            status:200,
            data:bookData
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            status:400,
            error: error
        })
    }
}

exports.postBook = async (req,res)=>{
    try {
        const bookData = await Book.create(req.body)
        res.status(201).json({
            ok:true,
            status:201,
            message:"Book created successfully",
            data:bookData
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            status:400,
            error: error
        })
    }
}

exports.putBook = async (req,res)=>{
    try {
        const id = req.params.id
        const bookData = await Book.findByIdAndUpdate(id, req.body)
        if(!bookData){
            res.status(404).json({
                ok:false,
                status:404,
                mesg:"Book not found"
            })    
        }
        res.status(200).json({
            ok:true,
            status:200,
            message:"Book updated successfully",
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            status:400,
            error: error
        })
    }
}

exports.deleteBook = async (req,res)=>{
    try {
        const id = req.params.id
        const bookData = await Book.findByIdAndDelete(id)
        if(!bookData){
            res.status(404).json({
                ok:false,
                status:404,
                mesg:"Book not found"
            })    
        }
        res.status(200).json({
            ok:true,
            status:200,
            message:"Book deleted successfully",
            data:bookData
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            status:400,
            error: error
        })
    }
}
