import React,{useState,useEffect}from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
function Home(){
    const [books,setBooks]=useState([]);
    const [search,setSearch]=useState([]);
    const getBooks=async()=>{
        await fetch('http://localhost:5000/api/DisplayBooks',{
        method:'POST',
        withCredentials:true,
        crossorigin:true,
    })
    .then((res)=>res.json())
    .then((data)=>{
        setBooks(data);
        //console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });
    }
    //console.log(books)
    useEffect(() => {
        getBooks();
      }, []);
    return(
        <>
        <div>
            <Navbar/>
        </div>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
              />
        <div className="row">
            {/* {books.map((data)=>{
                return(
                    <div className="col-sm-2">
                    <Card name={data[0]} genre={data[1]}/>
                    </div>
                )
            }) */
            books.filter((item)=>
            (
                (item[0].toLowerCase().includes(search.toLowerCase()) || item[1].toLowerCase().includes(search.toLowerCase()) )
                )
            )
            .map((filteritems)=>{
                return (
                    <div className="col-sm-2">
                    <Card name={filteritems[0]} genre={filteritems[1]}/>
                    </div>
                );
            })
            }
            
        </div>
        </>
    )
};
export default Home;