This is backend for Library app.
It is tested using thunder client.
It is connected to MongoDB Atlas.
This have three endpoints. They are as:
1. http://localhost:5000/api/DisplayBooks
   This displays name of all the books in library and their genre.
2. http://localhost:5000/api/AddBook
   This takes input in json format as:
   {
        "serial_no":"581853",
        "book_name":"Be a Woman",
        "genre":"Motivation"
    }
   Each book has a unique serial number , if a book with same serial number already exists in library than it returns
   {
  "success": false,
  "reason": "This Serial number is already in record, can't add this"
}
  Otherwise Book is added in system successfully and return
  {
    "success": true
  }
3. http://localhost:5000/api/UpdateBook
   This also takes input in json format as:
   {
        "serial_no":"581853",
        "book_name":"Be a Woman",
        "genre":"Motivation"
    }
   It finds the book with its given serial number in input and update its name and genre provided in input.

Previously it was having a bug, that after adding or updating book if you attempt for DisplayBooks so changes are not visible until we start the server again. Changes are visible on restating server. The data 
is stored on MongoDB cloud.
(*This bug has been removed*)
