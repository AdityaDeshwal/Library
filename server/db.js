require('dotenv').config()
const { MongoClient } = require('mongodb');
const mongoose=require('mongoose');
const mongoURI=process.env.MONGO_URI;
const db="library";
const mongoDB=async()=>{
    mongoose.connect(mongoURI);
    //const mongoosecol=await mongoose.connection.db.collection("books");
    const client=new MongoClient(mongoURI);
    try{
        await client.connect();
        console.log("connected");
        const db=client.db("test");
        //const mongoosecol=await mongoose.connection.db.collection("books");
        const col=await db.collection("bookschemas");
        const a= await col.find({}).toArray();
        console.log('db.js is fine');
        global.books=a;
        //global.data=col;
    }
    catch(err){
        console.log(err.stack);
    }
    finally{
        await client.close();
    }
    // const booksSchema=new mongoose.Schema({
    //     serial_no:String,
    //     book_name:String,
    //     genre:String
    // })
    // const Books=mongoose.model('books',booksSchema);
    // const book1=new Books({
    //     serial_no:'561718',
    //     book_name:'abcd',
    //     genre:'kids section'
    // });
    // console.log(book1.genre);
    // const books=await Books.find();
    // console.log(books);
}

module.exports=mongoDB;