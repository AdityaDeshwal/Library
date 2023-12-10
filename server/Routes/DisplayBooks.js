const express=require("express");
const router=express.Router();


router.post('/DisplayBooks',(req,res)=>{
    const book_names_set=new Set();
    let book_names=[]; 
    //console.log('we are here');
    for(var key in global.books){
        //console.log(global.books[key].book_name)
        book_names_set.add(global.books[key].book_name + " with genre " + global.books[key].genre)
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