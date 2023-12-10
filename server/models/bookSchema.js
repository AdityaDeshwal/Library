const mongoose=require('mongoose');
const{Schema}=mongoose;

const bookSchema=new Schema({
    serial_no:{
        type:String,
        required:true
    },
    book_name:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('bookSchema',bookSchema)