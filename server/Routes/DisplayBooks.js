const express=require("express");
const router=express.Router();
const bookSchema=require("../models/bookSchema");


router.post('/DisplayBooks',async(req,res)=>{
    const book_names_set=new Set();
    let book_names=[]; 
    const data=await bookSchema.find({});
    // //console.log('we are here');
    for(var key in data){
        //console.log(global.books[key].book_name)
        book_names_set.add(data[key].book_name + " with genre " + data[key].genre)
    }
    for(const item of book_names_set){
        //console.log(item)
        book_names.push(item);
    }
    try{
        res.send(book_names);
    }catch(error){
        console.log(error.nessage);
        res.send("Server Error");
    }
})

module.exports=router;