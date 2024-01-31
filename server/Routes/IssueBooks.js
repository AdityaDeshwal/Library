const express=require('express');
const router=express.Router();
const bookSchema=require('../models/bookSchema')

router.post('/IssueBooks',async(req,res)=>{
    const filter={serial_no:req.body.serial_no};
    const update={availability:0};
    // await bookSchema.findOneAndUpdate(filter, update, {
    //     new: true
    //   });
    try{
        const doc = await bookSchema.findOneAndUpdate(filter, update, {
            new: true
          });
          //this was used to add availability thing in each object
        // const doc = await bookSchema.updateMany(filter, update, {
        //     new: true
        //   });
    res.json({success:true})
    // res=
    }catch(error){
        console.log(error);
        res.json({success:false})
    }
})

module.exports=router;