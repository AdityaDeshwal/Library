const express=require('express');
const app=express();
const port=5000;
const mongoDB=require("./db");
mongoDB();

app.use((req,res,next)=>{
   res.setHeader("Access-Control-Allow-origin","http://localhost:3000");
   res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-with, Content-Type, Accept"
   );
   next();
})

app.use(express.json())
app.use('/api',require("./Routes/DisplayBooks.js"));
app.use('/api',require("./Routes/AddBook.js"));
app.use('/api',require("./Routes/UpdateBook.js"));
app.use('/api',require("./Routes/IssueBooks.js"));

 app.get('/',(req,res)=>{
    res.send("Hello World")
 })

 app.listen(port,()=>{
    console.log(`listening on ${port}`)
 })
