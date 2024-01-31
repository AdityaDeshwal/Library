require('dotenv').config()
const express=require("express");
const router=express.Router();
const bookSchema=require("../models/bookSchema");

router.post('/UpdateBook',async(req,res)=>{
    const filter={serial_no:req.body.serial_no}
    const update = {book_name:req.body.book_name, genre:req.body.genre,availability:req.body.availability};
    //const filter={};
    // const update={availability:1};
    try{
        const doc = await bookSchema.findOneAndUpdate(filter, update, {
            new: true
          });
         // this was used to add availability thing in each object
        // const doc = await bookSchema.updateMany(filter, update, {
        //     new: true
        //   });
    res.json({success:true})
    }catch(error){
        console.log(error);
        res.json({success:false})
    }
});
module.exports=router;