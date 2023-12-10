const express=require("express");
const router=express.Router();
const bookSchema=require("../models/bookSchema")
const { body, validationResult} = require("express-validator");
router.post("/AddBook",
body("serial_no").isString(),
body("book_name").isString(),
body('genre').isString(),
async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty){
        return res.status(400).json({errors:errors.array});
    }
    let matches=await bookSchema.find({ serial_no: req.body.serial_no});
    //console.log(matches.length);
    if(matches.length!=0){
        //console.log("This Serial number already in record");
        res.json({success:false,
            reason:"This Serial number is already in record, can't add this"})
    }
    else{
        try{
            await bookSchema.create({
                serial_no:req.body.serial_no,
                book_name:req.body.book_name,
                genre:req.body.genre
            });
            res.json({success:true})
            //process.exit(1);
        }
        catch(error){
            console.log(error);
            res.json({success:false});
        }
    }
});

module.exports=router;